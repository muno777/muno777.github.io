export enum PortfolioItemType {
	IMAGE,
	VIDEO,
}

export class Portfolio {
	constructor(
		public id: string,
		public name: string,
		public item_groups: PortfolioItemGroup[],
	) {}
	get_page_path(): string {
		return "/portfolio/" + this.id
	}
	get_images_path(): string {
		return "/img/portfolio/" + this.id + "/"
	}
}

export class PortfolioItemGroup {
	constructor(
		public description: string,
		public items: PortfolioItem[],
	) {}
}

export class PortfolioItem {
	constructor(
		public description: string,
		public path: string, // video id or image url
	) {}
	get_type(): PortfolioItemType {
		if (this.path.endsWith(".png") || this.path.endsWith(".jpg") || this.path.endsWith(".gif") || this.path.endsWith(".jpeg") || this.path.endsWith(".svg")) {
			return PortfolioItemType.IMAGE
		}
		return PortfolioItemType.VIDEO
	}
	public toString = () : string => {
		return `(${this.description})`;
    }
}

export const pixelart = new Portfolio("pixelart", "Pixel Art", [
	new PortfolioItemGroup("fuck", [
		new PortfolioItem(
			"fuck you",
			"fuck you.png"
		),
		new PortfolioItem(
			"fuck me",
			"fuck me.png"
		),
	]),
	new PortfolioItemGroup("fuck", [
		new PortfolioItem(
			"fuck us",
			"fuck you.png"
		),
		new PortfolioItem(
			"fuck him",
			"fuck me.png"
		),
		new PortfolioItem(
			"fuck her",
			"fuck me.png"
		),
		new PortfolioItem(
			"fuck it",
			"fuck me.png"
		),
		new PortfolioItem(
			"fuck hoo",
			"fuck me.png"
		),
	]),
]);