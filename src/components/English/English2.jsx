import React from "react";
import "../../styles/English/English2.css";
import Photo2 from "../../assets/English/lbrhousha2.jpg";

function English2() {
  return (
    <div className="english2-cont">
      <div className="english2-el">
        <div className="bac-english2">
          <div className="english2-split1">
            <div className="english2-div-img">
              <img src={Photo2} alt="" className="english2-img" />
            </div>
            <div className="english2-title">
              <h1 className="english2-title-h1">Listen and Watch</h1>
              <p className="english2-title-p">
                Explore English songs and stories! Enjoy learning in a fun,
                engaging way!
              </p>
            </div>
          </div>
          <div className="english2-split2">
            <div className="english2-split2-title">
              <p className="english2-split2-title-p">
                Do you enjoy listening to songs in English? Singing along is an
                excellent method to enhance your English speaking skills, and we
                offer a wide selection of captivating songs for your enjoyment.
                Additionally, do you have a fondness for immersing yourself in
                stories? Reading stories is an effective way to enrich your
                vocabulary, and we provide an array of engaging stories for you
                to watch. Dive into our collection, where you can listen to
                songs, watch stories, print activities, and share your thoughts
                through comments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default English2;
