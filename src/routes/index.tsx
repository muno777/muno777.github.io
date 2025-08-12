import LineBig from "~/components/LineBig";
import PageTitle from "~/components/PageTitle";
import Portfolio from "~/components/Portfolio";
import PortfolioPreview from "~/components/PortfolioPreview";
import YouTubeVideo from "~/components/YouTubeVideo";

export default function Home() {
  // console.log(portfolioList)
  return (
    <div class="flex flex-col items-center">
      <PageTitle>Home</PageTitle>
      {/* <YouTubeVideo video_id="K4lvfmbMkcw"/> */}
      <p class="pb-4">
        Hi! I'm Muno.
      </p>
      <p>
        I'm an artist and programmer known for making <a href="https://steamcommunity.com/workshop/filedetails/?id=2115895106">popular mods</a> in the Rivals of Aether workshop.
      </p>
      <p class="pb-4">
        Nowadays, I'm working with Alan Becker as the Lead Developer for <a href="https://www.kickstarter.com/projects/animationversus/animation-versus">Animation VERSUS</a>!
      </p>
      <p>
        Previous:
      </p>
      <div class="flex gap-x-4">
        <div class="text-right">
          <p>
            Preliminary UI Artist
          </p>
          <p>
            Pixel Artist 
          </p>
          <p>
            Starving Indie Dev 
          </p>
        </div>
        <div class="text-left">
          <p>
            <a href="https://store.steampowered.com/app/2217000/Rivals_of_Aether_II/">Rivals of Aether II</a>
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=2B1v94Dp1Jw">Super Mariomon</a>
          </p>
          <p>
            two <a href="https://bymuno.itch.io/slingshell">shelved</a> <a href="https://youtu.be/fMAp7kGDQZM">projects</a>
          </p>
        </div>
      </div>
      <p class="pt-4">
        <a href="https://discord.gg/yhchvBB">Discord</a> | <a href="https://youtube.com/@muno">YouTube</a> | <a href="https://bsky.app/profile/bymuno.com">Bluesky</a> | <a href="mailto:munosnail@gmail.com">munosnail@gmail.com</a>
      </p>
      {/* <p>
        Check out my portfolios below!
      </p> */}
      <LineBig/>
      <PortfolioPreview portfolio_id="pixelart"></PortfolioPreview>
      <PortfolioPreview portfolio_id="illustrations"></PortfolioPreview>
      <PortfolioPreview portfolio_id="doodles"></PortfolioPreview>
      <PortfolioPreview portfolio_id="graphicdesign"></PortfolioPreview>
      <PortfolioPreview portfolio_id="videos"></PortfolioPreview>
      <PortfolioPreview portfolio_id="music"></PortfolioPreview>
    </div>
  );
}
