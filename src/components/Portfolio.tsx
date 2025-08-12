// import { PortfolioItem, PortfolioItemType, Portfolio } from "~/data/portfolio";
import { For } from "solid-js";
import portfolioList from "~/data/portfolioList.json";
import ExpandableImage from "./ExpandableImage";
import PortfolioGroup from "./PortfolioGroup";

export default function PortfolioPreview(props: {portfolio_id: string}) {
  if (!(props.portfolio_id in portfolioList)) {
    return (
      <p>I AM ERROR</p>
    )
  }
  var portfolio = (portfolioList as any)[props.portfolio_id];
  return (
    <div>
      <For each={Object.values(portfolio.dirs)}>
        {(group) => <PortfolioGroup portfolio_group={group as Record<string, any>}/>}
      </For>
    </div>
  );
}