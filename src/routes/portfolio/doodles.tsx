import PageTitle from "~/components/PageTitle";
import Portfolio from "~/components/Portfolio";

export default function PortfolioDoodles() {
  return (
	<div class="flex flex-col items-center">
	  <PageTitle>Portfolio: Doodles</PageTitle>
	  <p>Portfolio: Doodles</p>
	  <Portfolio portfolio_id="doodles"></Portfolio>
	</div>
  );
}
