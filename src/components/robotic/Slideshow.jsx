import  { useState } from 'react';
import "../../styles/robotic/Slideshow.css"; // Import your custom CSS file here
import img1 from "../../assets/robotic/img2.jpg";
import img2 from "../../assets/robotic/img3.jpeg";
import img3 from "../../assets/robotic/img4.jpeg";23
function Slideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [img1, img2, img3];

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="slideshow-container">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide" />

            <button className="prev-button" onClick={goToPreviousSlide}>
                &#10094;
            </button>
            <button className="next-button" onClick={goToNextSlide}>
                &#10095;
            </button>
        </div>
    );
}

export default Slideshow;
