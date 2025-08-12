import PageTitle from "~/components/PageTitle";
import Portfolio from "~/components/Portfolio";

export default function PortfolioMusic() {
  return (
	<div class="flex flex-col items-center">
	  <PageTitle>Music</PageTitle>
	  <p>Portfolio: Music</p>
	  <Portfolio portfolio_id="music"></Portfolio>
	</div>
  );
}
