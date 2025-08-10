import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { JSXElement } from "solid-js";

export default function PageTitle(props: {children: JSXElement | JSXElement[]}) {
  return (
    <Title>{props.children} - by Muno!</Title>
  );
}