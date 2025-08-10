import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { JSXElement } from "solid-js";
import { PortfolioItem, PortfolioItemType, Portfolio } from "~/data/portfolio";

export default function PageTitle(props: {portfolio: Portfolio}) {
  var valid_items: PortfolioItem[] = [];
  props.portfolio.item_groups.forEach(
    item_group => 
    valid_items = valid_items.concat(
      item_group.items
      .filter(
        item =>
        item.get_type() == PortfolioItemType.IMAGE
      )
    )
  );
  valid_items = valid_items
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);
  console.log(valid_items);
  return (
    <div>{valid_items.toString()}</div>
  );
}