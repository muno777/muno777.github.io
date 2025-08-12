export default function YouTubeVideo(props: {video_id: string, class?: string}) {
  return (
    <iframe class={`${props.class} w-full aspect-video`} src={`https://www.youtube.com/embed/${prepareYoutubeID(props.video_id)}`}></iframe>
  );
}

export function prepareYoutubeID(video_id: string) {
  return removePrefix(video_id.split(" //")[0], "https://youtu.be/")
}

function removePrefix(str: string, prefix: string): string {
  return str.startsWith(prefix) ? str.slice(prefix.length) : str;
}