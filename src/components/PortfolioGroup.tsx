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
  "sm:columns-1"
  "sm:columns-2"
  "sm:columns-3"
  "sm:columns-4"
  "sm:columns-5"
  
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
      <div class={`columns-${Math.min(props.portfolio_group.columns ?? 1, 2)} sm:columns-${props.portfolio_group.columns ?? 1} gap-2 space-y-2`}>
        <For each={props.portfolio_group.files}>
          {(src) => (
            <div class="flex justify-center">
              <ExpandableImage src={src} alt="" />
            </div>
          )}
        </For>
        <For each={props.portfolio_group.videos}>
          {(id) => (
            <div class="flex justify-center">
              <YouTubeVideo video_id={id} />
            </div>
          )}
        </For>
      </div>
    </div>
  );
}