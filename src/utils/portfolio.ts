enum PortfolioItemType {
	IMAGE,
	VIDEO,
}

class Portfolio {
	constructor(
		public item_groups: PortfolioItemGroup[],
	) {}
}

class PortfolioItemGroup {
	constructor(
		public description: string,
		public items: PortfolioItem[],
	) {}
}

class PortfolioItem {
	constructor(
		description: string,
		path: string, // video id or image url
	) {}
	get_type(): PortfolioItemType {
		// TODO return image if it has an image file extension at the end
		return  PortfolioItemType.VIDEO
	}
}

export const pixel_art = new Portfolio([
	new PortfolioItemGroup("fuck", [
		new PortfolioItem(
			"fuck you",
			"img/fuck you.png"
		),
		new PortfolioItem(
			"fuck me",
			"img/fuck me.png"
		),
	]),
	new PortfolioItemGroup("fuck", [
		new PortfolioItem(
			"fuck you",
			"img/fuck you.png"
		),
		new PortfolioItem(
			"fuck me",
			"img/fuck me.png"
		),
	]),
]);