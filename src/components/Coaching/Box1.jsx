import React from "react";
import "../../styles/Coaching/Box1.css";
import Logo from "../../assets/Coaching/1.png";

function Box1() {
  return (
    <div className="box1-cont">
      <div className="box1-el">
        <div className="bac-box">
          <div className="info-box">
            <h1 className="h1-box">“SUCCESS DOESN’T COME </h1>
            <p className="p-box">
              If you are not willing to risk the usual, you will have to settle
              for the
            </p>
          </div>
          <div className="logo-box">
            <img src={Logo} alt="" className="img-box" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box1;
