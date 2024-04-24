import React from "react";
import "../../styles/Informatique/Info1.css";
import Logo from "../../assets/Informatique/OC3JAS0.jpg";

function Box1() {
  return (
    <div className="box1-container">
      <div className="box1-element">
        <div className="background-box1">
          <div className="info-box1">
            <h1 className="heading-box1">
              Learn new skills. <br />
              Prove your potential
            </h1>
            <p className="paragraph-box1">
              Learn, grow, Check courses Do projectsCode in-browser Set goals,
              Achieve.
            </p>
          </div>
          <div className="logo-box1">
            <img src={Logo} alt="" className="image-box1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box1;
