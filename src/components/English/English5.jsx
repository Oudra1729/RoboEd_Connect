import React from "react";
import "../../styles/English/English5.css";

import Photo4 from "../../assets/English/lbrhoush.webp";

function English5() {
  return (
    <div className="english5-cont">
      <div className="english5-el">
        <div className="bac-english5">
          <div className="english5-split1">
            <div className="english5-div-img">
              <img src={Photo4} alt="" className="english5-img" />
            </div>
            <div className="english5-title">
              <h1 className="english5-title-h1">Speak and spell</h1>
              <p className="english5-title-p">
                Learn how to say and spell English words with songs and stories.
              </p>
            </div>
          </div>
          <div className="english5-split2">
            <div className="english5-split2-title">
              <p className="english5-split2-title-p">
                Are you looking to enhance your English spelling and
                pronunciation skills? You're in the right place! Here, you'll
                find valuable tips and guidance on how to correctly pronounce
                and spell English words. With practice and dedication, you can
                refine your language skills and communicate more effectively in
                English.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default English5;
