import Counter from "~/components/Counter";
import LineBig from "~/components/LineBig";
import PageTitle from "~/components/PageTitle";
import PortfolioPreview from "~/components/PortfolioPreview";
import YouTubeVideo from "~/components/YouTubeVideo";
import portfolioList from "~/data/portfolioList.json";

export default function Home() {
  // console.log(portfolioList)
  return (
    <div class="flex flex-col items-center">
      <PageTitle>Home</PageTitle>
      <YouTubeVideo video_id="K4lvfmbMkcw"/>
      <LineBig/>
      <div class="w-full flex justify-between flex-col sm:flex-row items-center sm:items-start gap-y-4 gap-x-4">
        <div>
          This is a decently long sentence.<br/>wow<br/>wow<br/>wow<br/>wow<br/>wow
        </div>
        <div>
          This is a decently long sentence.
        </div>
        <div>
          This is a decently long sentence.
        </div>
      </div>
      <LineBig/>
      <PortfolioPreview portfolio_id="pixelart"></PortfolioPreview>
      {/* <PortfolioPreview portfolio_id="doodles"></PortfolioPreview> */}
    </div>
  );
}
