import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import "./Trailer.css";

const Trailer = () => {
  let params = useParams();
  console.log("params :>> ", params);
  let key = params.ytTrailerId;
  return (
    <div className="react-player-container">
      {key && (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${key}`}
          controls={true}
          playing={true}
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};

export default Trailer;
