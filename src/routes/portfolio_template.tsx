import PageTitle from "~/components/PageTitle";
import Portfolio from "~/components/Portfolio";

export default function PortfolioFooFoo() {
  return (
	<div class="flex flex-col items-center">
	  <PageTitle>Foo Foo</PageTitle>
	  <p>Portfolio: Foo Foo</p>
	  <Portfolio portfolio_id="foofoo"></Portfolio>
	</div>
  );
}
