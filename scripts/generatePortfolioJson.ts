import { readdirSync, statSync, readFileSync } from "fs";
import { join } from "path";
import { writeFileSync } from "fs";

const PUBLIC_SUBFOLDER = "img/portfolio";

const root = join(process.cwd(), "public", PUBLIC_SUBFOLDER);

function walk(dir: string, baseUrl: string): any {
	const result: Record<string, any> = {};

	// read description.txt if present
	const descPath = join(dir, "description.txt");
	try {
		const desc = readFileSync(descPath, "utf-8").trim();
		if (desc) {
			result.description = desc;
		}
	} catch {
		result.description = "";
		// no description.txt, ignore
	}

	// read videos.txt if present
	const videosPath = join(dir, "videos.txt");
	try {
		const videos = readFileSync(videosPath, "utf-8").trim();
		if (videos) {
			result.videos = videos.split('\n');
		}
	} catch {
		result.videos = [];
	}

	for (const file of readdirSync(dir)) {
		const filePath = join(dir, file);
		const stat = statSync(filePath);

		if (stat.isDirectory()) {
			result[file] = walk(filePath, `${baseUrl}/${file}`);
		} else if (/\.(png|jpe?g|gif|webp)$/i.test(file)) {
			if (!result._files) result._files = [];
			result._files.push(`${baseUrl}/${file}`);
		}
	}

	return result;
}

const hierarchicalList = walk(root, `/${PUBLIC_SUBFOLDER}`);

console.log(JSON.stringify(hierarchicalList, null, 2));

const outputPath = join(process.cwd(), "src", "data", "portfolioList.json");

writeFileSync(outputPath, JSON.stringify(hierarchicalList, null, 2), "utf-8");

console.log(`Wrote image list JSON to ${outputPath}`);