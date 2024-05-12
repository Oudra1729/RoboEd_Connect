import React from "react";

import "../../styles/English/English1.css";
import Photo1 from "../../assets/English/lbrhousha.png";


function English() {
  return (
    <div className="english-cont">
      <div className="english-el">
        <div className="bac-english">
          <div className="info-english">
            <h1 className="h1-english">Learn new skills. </h1>
          </div>
          <div className="logo-english">
            <img src={Photo1} alt="" className="img-english" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default English;
