type VideoPlayerProps = {
  src: string,
  poster: string,
  width: number,
  height: number,
  muted: boolean
}

function VideoPlayer({src, poster, width, height, muted}: VideoPlayerProps) {
  return (
    <video muted={muted} autoPlay poster={poster} width={width} height={height}>
      <source src={src} type="video/mp4"/>
    </video>
  );
}

export default VideoPlayer;
