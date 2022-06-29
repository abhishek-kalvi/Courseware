import YouTube from "react-youtube";
import React from "react";

interface IYoutubeProps {
  start?: string;
  end?: string;
  videoId: string;
}

const Youtube = (props: IYoutubeProps): JSX.Element => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      ...(props.start && { start: props.start }),
      ...(props.end && { end: props.end }),
    },
  };

  return <YouTube videoId={props.videoId ?? ""} opts={opts} />;
};

export default Youtube;
