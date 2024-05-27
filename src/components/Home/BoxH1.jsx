import React from "react";
import "../../styles/Home/BoxH1.css";
import VideoSource from "../../assets/Home/robo.mp4"; // Add your video source here

function BoxH1() {
  return (
    <div className="boxh1-cont">
      <div className="boxh1-el">
        <div className="bac-boxh1">
          <div className="info-boxh1">
            <h1 className="h1-boxh1">Formation</h1>
            <p className="p-boxh1">
              An innovative and advanced engineering experience for children
            </p>
          </div>
        </div>
        <div className="logo-boxh1">
          <video className="video-circle" width="500" height="200" controls autoPlay loop>
            <source className="ddd" src={VideoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="button-boxh1">
          <button className="btnnnn">More</button>
        </div>
      </div>
    </div>
  );
}

export default BoxH1;
