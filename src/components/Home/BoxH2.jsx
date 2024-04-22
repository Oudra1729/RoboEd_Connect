import { BiChevronRight } from "react-icons/bi";
import React from "react";
import "../../styles/Home/BoxH2.css";
import Robotics from "../../assets/Home/robotics.png";
import Coaching from "../../assets/Home/coaching.png";
import English from "../../assets/Home/english.png";
import Informatics from "../../assets/Home/informatics.png";

function BoxH2() {
  return (
    <div className="boxh2-container">
      <div className="make-boxh2">
        <div className="boxh2-box">
          <div className="boxh2-element">
            <img src={Robotics} alt="" className="boxh2-img" />
            <span>
              <h1 className="boxh2-h1">Robotics</h1>
            </span>
            <span>
              <p className="boxh2-p">
                An innovative and advanced engineering experience for children
              </p>
            </span>
            <div className="boxh2-link">
              <a className="link-a" href="">READ MORE</a>
              <BiChevronRight />
            </div>
          </div>
        </div>
        <div className="boxh2-box">
          <div className="boxh2-element">
            <img src={Informatics} alt="" className="boxh2-img" />
            <span>
              <h1 className="boxh2-h1">Informatics</h1>
            </span>
            <span>
              <p className="boxh2-p">
                Information technology is essential for the future of children
                and adults
              </p>
            </span>
            <div className="boxh2-link">
              <a className="link-a" href="">READ MORE</a>
              <BiChevronRight />
            </div>
          </div>
        </div>
        <div className="boxh2-box">
          <div className="boxh2-element">
            <img src={Coaching} alt="" className="boxh2-img" />
            <span>
              <h1 className="boxh2-h1">Coaching</h1>
            </span>
            <span>
              <p className="boxh2-p">
                With practical training you can be betters
              </p>
            </span>
            <div className="boxh2-link">
              <a className="link-a" href="">READ MORE</a>
              <BiChevronRight />
            </div>
          </div>
        </div>
        <div className="boxh2-box">
          <div className="boxh2-element">
            <img src={English} alt="" className="boxh2-img" />
            <span>
              <h1 className="boxh2-h1">English</h1>
            </span>
            <span>
              <p className="boxh2-p">
                The world's No. 1 technology for effective education
              </p>
            </span>
            <div className="boxh2-link">
              <a className="link-a" href="" >READ MORE</a>
              <BiChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxH2;
