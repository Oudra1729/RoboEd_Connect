import React, { useState } from "react";
import "../../styles/Coaching/Box3.css";

import image1 from "../../assets/Coaching/2.jpg";
import image2 from "../../assets/Coaching/3.jpg";
import image3 from "../../assets/Coaching/4.jpg";

function Box3() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="box3-cont">
      <div className="box3-el">
        <div className="im1-bx3">
          <img
            src={image1}
            alt=""
            className="first-image"
            onClick={() => openPopup(image1)}
          />
        </div>
        <div className="im2-bx3">
          <div className="box-im">
            <img
              src={image2}
              alt=""
              className="second-image"
              onClick={() => openPopup(image2)}
            />
          </div>
          <div className="box-im">
            <img
              src={image3}
              alt=""
              className="second-image"
              onClick={() => openPopup(image3)}
            />
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-container">
            <img src={selectedImage} alt="" className="popup-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Box3;
