import React from "react";
import loadingGif from "../Loader.gif";

//show a loading gif while wating the data to be fetched
function Loading() {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    alignSelf: "center",
  };
  return (
    <div style={style}>
      <img style={{ width: "30vw" }} src={loadingGif}></img>
    </div>
  );
}

export default Loading;
