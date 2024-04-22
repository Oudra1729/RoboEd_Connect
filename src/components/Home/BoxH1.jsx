import React from "react";
import "../../styles/Home/BoxH1.css";

import Logoh from "../../assets/Home/child.png";

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
          <div class="circle-face">
            <img src={Logoh} alt="" className="img-boxh1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxH1;
