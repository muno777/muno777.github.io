import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import PageWrapper from "./components/PageWrapper";
import { MetaProvider, Title } from "@solidjs/meta";

export default function App() {
  return (
    <MetaProvider>
      <Title>by Muno!</Title>
      <Router
        root={props => (
          <Suspense>
            <PageWrapper>
              {props.children}
            </PageWrapper>
          </Suspense>
        )}
        >
        <FileRoutes/>
      </Router>
    </MetaProvider>
  );
}
