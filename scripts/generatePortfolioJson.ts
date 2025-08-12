import { readdirSync, statSync, readFileSync } from "fs";
import { join } from "path";
import { writeFileSync } from "fs";

const PUBLIC_SUBFOLDER = "img/portfolio";

const root = join(process.cwd(), "public", PUBLIC_SUBFOLDER);

function walk(dir: string, baseUrl: string): any {
	var result: Record<string, any> = {};
	
	// meta.json possible fields:
	// - description, the description for this portfolio item when displayed
	// - videos, an array of youtube video IDs to show
	// - columns, how many masonry columns to display these items in
	
	const jsonPath = join(dir, "meta.json");
	try {
		const contents = readFileSync(jsonPath, "utf-8").trim();
		if (contents) {
			result = JSON.parse(contents);
		}
	} catch {
		// file DNE or is bad, ignore
	}
	
	for (const file of readdirSync(dir)) {
		const filePath = join(dir, file);
		const stat = statSync(filePath);

		if (stat.isDirectory()) {
			if (!result.dirs) result.dirs = {};
			result.dirs[file] = walk(filePath, `${baseUrl}/${file}`);
		} else if (/\.(png|jpe?g|gif|webp)$/i.test(file)) {
			if (!result.files) result.files = [];
			result.files.push(`${baseUrl}/${file}`);
		}
	}

	return result;
}

const hierarchicalList = walk(root, `/${PUBLIC_SUBFOLDER}`).dirs;

// console.log(JSON.stringify(hierarchicalList, null, 2));

const outputPath = join(process.cwd(), "src", "data", "portfolioList.json");

writeFileSync(outputPath, JSON.stringify(hierarchicalList, null, 2), "utf-8");

console.log(`Wrote portfolio JSON to ${outputPath}`);