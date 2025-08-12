import PageTitle from "~/components/PageTitle";
import Portfolio from "~/components/Portfolio";

export default function PortfolioIllustrations() {
  return (
	<div class="flex flex-col items-center">
	  <PageTitle>Illustrations</PageTitle>
	  <p>Portfolio: Illustrations</p>
	  <Portfolio portfolio_id="illustrations"></Portfolio>
	</div>
  );
}
