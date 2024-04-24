import React from "react";
import "../../styles/Informatique/Info5.css";

import video1 from "../../assets/Informatique/video1.mp4";
import video2 from "../../assets/Informatique/video1.mp4";
import video3 from "../../assets/Informatique/video1.mp4";
import video4 from "../../assets/Informatique/video1.mp4";

function Info6() {
  return (
    <div className="container-info-videos">
      <div className="content-info-videos">
        <div className="row-info">
          <div className="video-container-info">
            <video width="500" height="200" controls autoPlay loop>
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-container-info">
            <video width="500" height="200" controls autoPlay loop>
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="row-info">
          <div className="video-container-info">
            <video width="500" height="200" controls autoPlay loop>
              <source src={video3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-container-info">
            <video width="500" height="200" controls autoPlay loop>
              <source src={video4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info6;
