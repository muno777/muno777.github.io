// import { PortfolioItem, PortfolioItemType, Portfolio } from "~/data/portfolio";
import { createSignal, For, onMount } from "solid-js";
import portfolioList from "~/data/portfolioList.json";
import { prepareYoutubeID } from "./YouTubeVideo";
import { A } from "@solidjs/router";

export default function PortfolioPreview(props: {portfolio_id: string}) {
  if (!(props.portfolio_id in portfolioList)) {
    return (
      <p>ERROR</p>
    )
  }
  const [isHovered, setIsHovered] = createSignal(false);
  var portfolio = (portfolioList as any)[props.portfolio_id];
  let containerRef!: HTMLAnchorElement;
  var images: any[] = [];
  for (const [key, value] of Object.entries(portfolio.dirs || {})) {
    images = images.concat((value as Record<string, any>).files);
  }
  for (const [key, value] of Object.entries(portfolio.dirs || {})) {
    if ("videos" in (value as Record<string, any>)) {
      images = images.concat((value as Record<string, any>).videos.map(
        (str: string) => "https://img.youtube.com/vi/" + prepareYoutubeID(str) + "/maxresdefault.jpg"
      ));
    }
  }
  
  images = shuffle(images);
  
  onMount(() => {
    const container = containerRef;
    let scrollPos = 0;

    function step() {
      const width = container.scrollWidth / 2; // recalc every frame for accuracy if needed
      scrollPos += isHovered() ? 4.0 : 1.2;

      if (scrollPos >= width) {
        scrollPos -= width; // subtract width instead of reset to zero for smooth wrap
      }

      container.scrollLeft = scrollPos;
      requestAnimationFrame(step);
    }
    step();
  });
  
  return (
    <div class="relative w-full max-w-full py-4">
      <A 
        href={"/portfolio/" + props.portfolio_id}
        ref={containerRef}
        class="w-full max-w-full overflow-hidden whitespace-nowrap scroll-smooth select-none box-border flex flex-nowrap items-center hover:scale-105 duration-200"
        style={{ "scroll-behavior": "smooth" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...images, ...images].map((src, i) => (
          <img
            src={src}
            alt=""
            class="inline-block h-80 mx-1 object-contain"
            draggable={false}
          />
        ))}
      </A>

      <div class="absolute bottom-6 right-2 text-5xl text-bymuno-white-0 bg-bymuno-grey-3/90 bg-opacity-50 px-3 pt-1 pb-4 pointer-events-none select-none">
        {portfolio.title || "Portfolio Title"}
      </div>
    </div>
  );
}

function shuffle<T>(array: T[]): T[] {
  const arr = array.slice(); // copy to avoid mutating original
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}