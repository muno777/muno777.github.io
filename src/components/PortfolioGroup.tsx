// import { PortfolioItem, PortfolioItemType, Portfolio } from "~/data/portfolio";
import { For } from "solid-js";
import portfolioList from "~/data/portfolioList.json";
import ExpandableImage from "./ExpandableImage";
import YouTubeVideo from "./YouTubeVideo";
import LineBig from "./LineBig";

export default function PortfolioPreview(props: {portfolio_group: Record<string, any>}) {
  // TODO add description and add videos from portfolio group data
  
  // this exists so tailwind will allow the columns below to be dynamic
  // basically getting tailwind to load in these column classes
  "columns-1"
  "columns-2"
  "columns-3"
  "columns-4"
  "columns-5"
  
  return (
    <div>
      <LineBig/>
      {
      props.portfolio_group.description && 
        <div class="text-center pb-6">
          <p class="text-left inline-block px-10">
            {props.portfolio_group.description}
          </p>
        </div>
      }
      <div class={`columns-${props.portfolio_group.columns ?? 1} gap-2 space-y-2`}>
        <For each={props.portfolio_group.files}>
          {(src) => <ExpandableImage src={src} alt="" />}
        </For>
        <For each={props.portfolio_group.videos}>
          {(id) => <YouTubeVideo video_id={id}/>}
        </For>
      </div>
    </div>
  );
}