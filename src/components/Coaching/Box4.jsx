import { AiOutlineCloseCircle } from "react-icons/ai";
import React, { useState } from "react";
import "../../styles/Coaching/Box4.css";
import image from "../../assets/Coaching/4.jpg";

function Box4() {
  const [selectedButton, setSelectedButton] = useState(null);

  const openPopup = (content) => {
    setSelectedButton(content);
  };

  const closePopup = () => {
    setSelectedButton(null);
  };

  return (
    <div className="box4-cont">
      <div className="box4-el">
        <div className="bac-box4">
          <div className="info-box4">
            <h1 className="h1-box4">HOW TO SOLVE CHILDREN'S PROBLEMS</h1>
            <p className="p-box4">
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
            <div className="btn-box4">
              <button className="tex-box4" onClick={() => openPopup("method1")}>
                <span className="tt-box4">SEE METHOD’S 1</span>
              </button>
              <button className="tex-box4" onClick={() => openPopup("method2")}>
                <span className="tt-box4">SEE METHOD’S 2</span>
              </button>
              {/* Add more buttons for different methods if needed */}
            </div>
          </div>
        </div>
      </div>
      {selectedButton && (
        <div className="popup-over" >
          <div className="popup-cont">
            {selectedButton === "method1" && (
              <>
                <AiOutlineCloseCircle className="buttonclose" onClick={closePopup}/>
                <h2 className="pop-h2" >Method 1</h2>
                <img src={image} alt="Method 1" className="pop-img" />
                <p className="pop-p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magnam tempora autem quasi quos minus nisi! Eveniet commodi
                  harum atque incidunt, odio cumque, nam quo vero quibusdam
                  perspiciatis voluptatem facere, cum possimus ab necessitatibus
                  nostrum quasi error? Blanditiis a in rem ad ullam, ex non
                  magnam odio officiis autem reiciendis minima. Minus velit
                  perferendis, atque sint provident non dolor ea nihil repellat!
                  Saepe commodi quibusdam perspiciatis voluptatum maxime nemo
                  autem velit amet modi. Facilis, laboriosam quam labore
                  quisquam animi nesciunt iste neque aut ipsa nisi molestiae rem
                  impedit voluptatibus aspernatur quos velit alias explicabo
                  .
                </p>
              </>
            )}
            {selectedButton === "method2" && (
              <>
                <AiOutlineCloseCircle className="buttonclose" onClick={closePopup}/>
                <h2 className="pop-h2" >Method 2</h2>
                <img src={image} alt="Method 2" className="pop-img" />
                <p className="pop-p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magnam tempora autem quasi quos minus nisi! Eveniet commodi
                  harum atque incidunt, odio cumque, nam quo vero quibusdam
                  perspiciatis voluptatem facere, cum possimus ab necessitatibus
                  nostrum quasi error? Blanditiis a in rem ad ullam, ex non
                  magnam odio officiis autem reiciendis minima. Minus velit
                  perferendis, atque sint provident non dolor ea nihil repellat!
                  Saepe commodi quibusdam perspiciatis voluptatum maxime nemo
                  autem velit amet modi. Facilis, laboriosam quam labore
                  quisquam animi nesciunt iste neque aut ipsa nisi molestiae rem
                  impedit voluptatibus aspernatur quos velit alias explicabo
                  .
                </p>
              </>
            )}
            {/* Add more conditionals for other methods */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Box4;
