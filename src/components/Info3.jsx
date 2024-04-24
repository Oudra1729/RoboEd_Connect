import React, { useState, useEffect } from "react";
import "../../styles/Informatique/Info3.css";

import image1 from "../../assets/Informatique/2.jpg";
import image2 from "../../assets/Informatique/3.jpg";
import image3 from "../../assets/Informatique/3.jpg";

function Info3() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [image1, image2, image3]; // Define your image sources here

    const goToPreviousImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    const goToNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
      const interval = setInterval(goToNextImage, 5000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="slider-info3">
        <button className="prev-button-info3" onClick={goToPreviousImage}>
          &#8249; {/* Unicode character for left arrow */}
        </button>
        <img
          src={images[currentImageIndex]}
          alt=""
          className="first-image-info3"
          onClick={() => openPopup(images[currentImageIndex])}
        />
        <button className="next-button-info3" onClick={goToNextImage}>
          &#8250; {/* Unicode character for right arrow */}
        </button>
      </div>
    );
  };

  return (
    <div className="container-info3">
      <div className="element-info3">
        <ImageSlider />
        <div className="description-info3">
          <p>
            The New Generation Center stands as a beacon of innovation and
            opportunity in the realm of youth education, specializing in the
            comprehensive exploration of informatics for children aged 10 to 15.
            Within our cutting-edge facility, we have meticulously crafted an
            immersive learning environment that caters to the diverse needs and
            interests of young learners eager to delve into the realms of
            coding, robotics, game design, and beyond. At the core of our
            pedagogical approach lies the firm belief that early exposure to
            informatics is paramount in preparing the next generation for the
            challenges and opportunities of an increasingly digital world. As
            such, our meticulously designed curriculum integrates hands-on,
            project-based learning experiences that not only cultivate technical
            skills but also foster critical thinking, creativity, collaboration,
            and problem-solving abilities. Our team of expert instructors,
            comprised of industry professionals and seasoned educators, are
            dedicated to guiding and inspiring each student on their unique
            educational journey. With a student-centered approach, we prioritize
            individualized instruction, ensuring that every child receives the
            support and encouragement needed to thrive and reach their full
            potential.
          </p>
          <div className="image-info3">
            <img
              src={image3}
              alt=""
              className="second-image-info3"
              onClick={() => openPopup(image3)}
            />
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="popup-overlay-info3" onClick={closePopup}>
          <div className="popup-container-info3">
            <img src={selectedImage} alt="" className="popup-image-info3" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Info3;
