import { A } from "@solidjs/router";
import { JSXElement } from "solid-js";

export default function PageWrapper(props: {children: JSXElement | JSXElement[]}) {
  return (
    <main class="h-full w-screen min-h-screen bg-bymuno-blue-3">
      {/* background */}
      <div class="
        bg-[url(/img/layout/background.gif)]
        bg-top bg-no-repeat
        px-4 py-2
        w-full h-full
        flex items-center flex-col
        text-xl
      ">
          <img src="/img/layout/body_top.gif" class="pixel-image"/>
          {/* border */}
          <div class="bg-bymuno-blue-1 px-1 w-full max-w-[968px]">
            {/* body */}
            <div class="min-h-[600px] w-full bg-bymuno-grey-3 h-full max-w-[960px] text-bymuno-white-0">
              <A href="/">
                <img src="/img/layout/header.gif" class="w-fit pixel-image pb-6"/>
              </A>
              <div class="px-10">
                {props.children}
              </div>
            </div>
          </div>
          <img src="/img/layout/body_bottom.gif" class="bg-bymuno-grey-3 pixel-image"/>
        </div>
    </main>
  );
}