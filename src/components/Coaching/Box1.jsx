import React from "react";
import "../../styles/Coaching/Box1.css";
import Logo from "../../assets/Coaching/1.png";

function Box1() {
  return (
    <div className="box1-cont">
      <div className="box1-el">
        <div className="bac-box1">
          <div className="info-box1">
            <h1 className="h1-box1">“SUCCESS DOESN’T COME </h1>
            <p className="p-box1">
              If you are not willing to risk the usual, you will have to settle
              for the
            </p>
          </div>
          <div className="logo-box1">
            <img src={Logo} alt="" className="img-box1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box1;
