import React from "react";
import "../../styles/English/English3.css";
import Photo3 from "../../assets/English/lbrhousha3.jpg";
function English3() {
  return (
    <div className="english3-cont">
      <div className="english3-el">
        <div className="bac-english3">
          <div className="english3-split1">
            <div className="english3-div-img">
              <img src={Photo3} alt="" className="english3-img" />
            </div>
            <div className="english3-title">
              <h1 className="english3-title-h1">Read and Write</h1>
              <p className="english3-title-p">
                Read and write about interesting topics!
              </p>
            </div>
          </div>
          <div className="english3-split2">
            <div className="english3-split2-title">
              <p className="english3-split2-title-p">
                Are you fond of reading in English? Reading serves as an
                excellent avenue to enrich your vocabulary and broaden your
                knowledge. Delve into our diverse selection of captivating
                texts, designed to pique your interest and stimulate your mind.
                Moreover, do you have an interest in honing your writing skills
                in English? Our writing section offers various text types for
                practice, each accompanied by helpful examples to guide you
                along the way. Dive into the world of writing and embark on a
                journey of linguistic expression and creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default English3;
