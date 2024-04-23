import { BiChevronRight } from "react-icons/bi"; 
import React from "react";
import "../../styles/Home/BoxH4.css";
import Pro from "../../assets/Home/professional.png";
import ManProf from '../../assets/Home/Profman.jpg'

function BoxH4() {
  return (
    <div className="boxh4-container">
      <div className="boxh4-all">
        <div className="boxh4-elem">
          <div className="boxh4-text">
            <div className="boxh4-text-info">
              <img className="boxh4-text-info-img" src={Pro} alt="" />

              <h4 className="boxh4-text-info-h4">DIPLOMAS</h4>
            </div>
            <div className="boxh4-text-info-a">
              <p className="boxh4-text-info-p">
                DO YOU WANT TO CHANGE YOUR CHILDREN'S LIVES FOR BETTER?
              </p>
            </div>
            <div className="boxh4-text-info-btn">
              <button className="boxh4-text-info-button">MORE ABOUT ME<BiChevronRight /></button>
            </div>
          </div>
          <div className="boxh4-image">
            <div className="boxh4-image-middle">
                <img className="boxh4-image-middle-img" src={ManProf} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxH4;
