import { createSignal } from "solid-js";

export default function YouTubeVideo(props: {video_id: string, class?: string}) {
  return (
    <iframe class={`${props.class} w-full aspect-video`} src={`https://www.youtube.com/embed/${removePrefix(props.video_id.split(" //")[0], "https://youtu.be/")}`}></iframe>
  );
}

function removePrefix(str: string, prefix: string): string {
  return str.startsWith(prefix) ? str.slice(prefix.length) : str;
}