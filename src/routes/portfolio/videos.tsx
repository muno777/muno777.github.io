import PageTitle from "~/components/PageTitle";
import Portfolio from "~/components/Portfolio";

export default function PortfolioVideos() {
  return (
	<div class="flex flex-col items-center">
	  <PageTitle>Portfolio: Videos</PageTitle>
	  <p>Portfolio: Videos</p>
	  <Portfolio portfolio_id="videos"></Portfolio>
	</div>
  );
}
