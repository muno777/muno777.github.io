import { createSignal } from "solid-js";

export default function YouTubeVideo(props: {video_id: string, class?: string}) {
  return (
    <iframe style="margin-bottom: 20px" class={`${props.class} border-4 border-bymuno-grey-1 w-full aspect-video`} src={`https://www.youtube.com/embed/${props.video_id}`}></iframe>
  );
}
