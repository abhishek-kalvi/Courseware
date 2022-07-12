import React from "react";

interface IDocProps {
  src: string;
  width?: number;
  height?: number;
  toc: any;
}

const DocsViewer = (props: IDocProps): JSX.Element => {
  const match = props.src.match(/[-\w]{25,}(?!.*[-\w]{25,})/);

  const iframeSrc =
    match && match.length
      ? `http://docs.google.com/viewer?srcid=${match[0]}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`
      : `https://docs.google.com/viewer?url=${props.src}&embedded=true&chrome=false`;

  let style = {
    width: props.width ?? (props.toc.length > 0 ? 400 : "60vw"),
    height: props.height ?? (props.toc.length > 0 ? 800 : "100vh"),
    border: "none",
  };

  return (
    <div>
      <iframe src={iframeSrc} style={style}></iframe>
    </div>
  );
};

export default DocsViewer;
