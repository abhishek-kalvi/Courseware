import React from "react";

interface ILoomProps {
  src: string;
}

const Loom = (props: ILoomProps): JSX.Element => {
  return (
    <iframe
      width="640"
      height="360"
      src={props.src}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
};

export default Loom;
