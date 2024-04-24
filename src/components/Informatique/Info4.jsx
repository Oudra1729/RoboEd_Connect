import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../../styles/Informatique/Info4.css";
import video5 from '../../assets/Informatique/video1.mp4'

function Info4() {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="info4-container">
      <div className="info4-element">
        <div className="info4-background">
          <div className="info4-content">
            <h1 className="info4-heading">Media is the future</h1>
            <p className="info4-paragraph">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un imprimeur anonyme assembla ensemble des morceaux de texte
              pour réaliser un livre spécimen de polices de texte. Il n'a pas
              fait que survivre cinq siècles, mais s'est aussi adapté à la
              bureautique informatique, sans que son contenu n'en soit modifié.
              Il a été popularisé dans les années 1960 grâce à la vente de
              feuilles Letraset contenant des passages du Lorem Ipsum, et, plus
              récemment, par son inclusion dans des applications de mise en page
              de texte, comme Aldus PageMaker.
            </p>
            <div className="info4-button">
              <button className="info4-text" onClick={openVideo}>
                <span className="info4-text">Watch Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {showVideo && (
        <div className="info4-popup-overlay" >
          <div className="info4-popup-container">
            <AiOutlineCloseCircle className="info4-close-button" onClick={closeVideo}/>
            {/* Embed your video here */}
            <iframe
              title="video"
              width="1070"
              height="600"
              src={video5}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Info4;
