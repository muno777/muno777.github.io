// import { PortfolioItem, PortfolioItemType, Portfolio } from "~/data/portfolio";
import portfolioList from "~/data/portfolioList.json";

export default function PortfolioPreview(props: {portfolio_id: string}) {
  if (props.portfolio_id in portfolioList) {
    console.log((portfolioList as any)[props.portfolio_id]);
  }
  return (
    <div>TODO</div>
  );
}

// export default function PortfolioPreview(props: {portfolio: Portfolio}) {
//   var valid_items: PortfolioItem[] = [];
//   props.portfolio.item_groups.forEach(
//     item_group => 
//     valid_items = valid_items.concat(
//       item_group.items
//       .filter(
//         item =>
//         item.get_type() == PortfolioItemType.IMAGE
//       )
//     )
//   );
//   valid_items = valid_items
//     .sort(() => 0.5 - Math.random())
//     .slice(0, 5);
//   console.log(valid_items);
//   return (
//     <div>{valid_items.toString()}</div>
//   );
// }