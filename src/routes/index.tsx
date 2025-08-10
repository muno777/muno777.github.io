import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import Counter from "~/components/Counter";
import LineBig from "~/components/LineBig";
import YouTubeVideo from "~/components/YouTubeVideo";

export default function Home() {
  return (
    <div class="flex flex-col items-center">
      <Title>Fuck You - by Muno!</Title>
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
    </div>
  );
}
