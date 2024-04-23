import React from "react";
import "../../styles/Home/BoxH3.css";
import Man from "../../assets/Home/man.jpg";

import Coach from "../../assets/Home/coach.png";
import Solution from "../../assets/Home/solution.png";
import Provide from "../../assets/Home/PROVIDE1.png";

function BoxH3() {
  return (
    <div className="boxh3-container">
      <div className="boxh3-ell">
        <div className="boxh3-al">
          <div className="boxh3-img">
            <div className="boxh3-circle-img">
              <img className="img-man" src={Man} alt="" />
            </div>
          </div>
          <div className="boxh3-info">
            <div className="boxh3-text">
              <span className="boxh3-provide">
                <img className="img-provide" src={Provide} alt="" />
              </span>
              <span className="boxh3-text-provide">
                <h1 className="text-provide">WHAT WE PROVIDE</h1>
              </span>
            </div>
            <div className="boxh3-provide-p">
              <span className="boxh3-sp">
                <p className="para-provide">
                  WE PRIORITIZE YOUR WELL-BEING FOR A BRIGHTER FUTURE
                </p>
              </span>
            </div>
            <div className="boxh3-solution">
              <span className="boxh3-sp">
                <img className="boxh3-sp-img" src={Solution} alt="" />
              </span>
              <span className="boxh3-title">
                <h3 className="boxh3-h3">Certified trainer</h3>
                <p className="boxh3-paragraph">
                  Our goal is to build solutions to make kids learn very quickly
                </p>
              </span>
            </div>
            <div className="boxh3-coach">
              <span className="boxh3-coach-sp">
                <img className="boxh3-coach-img" src={Coach} alt="" />
              </span>
              <span className="boxh3-coach-title">
                <h3 className="boxh3-coach-h3">Coach</h3>
                <p className="boxh3-coach-paragraph">
                  Supports the learner or client in achieving a specific
                  personal goal by practice
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxH3;
