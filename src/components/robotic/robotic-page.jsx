//import React from 'react';
import Footer from "../Coaching/Footer";
import "../../styles/robotic/robotic.css"; // Import your custom CSS file here
import 'react-slideshow-image/dist/styles.css'
import Slideshow from "./Slideshow"
import img2 from "../../assets/robotic/img2.jpg";
import img3 from "../../assets/robotic/img3.jpeg";
import img4 from "../../assets/robotic/img4.jpeg";

function Robotic() {
    return (
        <div>
            <div className="container">
                <div className="slideshow-container">
                    <Slideshow/>
                </div>
            </div>
            <div className="grid-container">
                <div className="item item1">
                    <h2>What is a robot and why should children learn to program one?</h2>
                    <p>
                        What is the first thing that comes to mind when you hear the word &ldquo;robot&rdquo;? Is it a humanoid character endowed with quasi-human intelligence and capable of performing tasks that humans do? Or is it rather a machine for assembly on a production line? Or even a space explorer? And how can you help your child learn to program a robot if you&apos;ve never tried it yourself? Read on to find out!
                    </p>
                </div>
                <div className="item">
                    <img className="item-image" src={img2} alt="Third slide" />
                </div>
                <div className="item">
                    <img className="item-image" src={img3} alt="Third slide" />
                </div>
                <div className="item item2">
                    <h2>Who enjoys playing with robots and construction kits?</h2>
                    <p>
                        Buildable LEGO&reg; robot toys are perfect gifts for boys and girls of all ages. Even if your child doesn&apos;t seem to have a clear interest in programming, the opportunity to build their own robot will likely spark their curiosity. Virtually any hobby or interest that excites your child can serve as a relevant starting point for their learning in robotics and programming. Whether they love kittens, music, remote-controlled cars, science fiction gadgets, or have a habit of taking things apart to understand how they work before putting them back together, your child can find the ideas they need to create a robot that reflects their unique personality and interests, whether it&apos;s making it speak or sing, adding sound and light effects, or making it move and interact.
                    </p>
                </div>
                <div className="double-column">
                    <h2>The pleasure of practical STEAM learning for elementary students!</h2>
                    <p>
                        LEGO&reg; Education SPIKE&trade; Essential sparks excitement among elementary students for STEAM concepts. This set of 449 pieces combines a selection of technological components with classic LEGO&reg; bricks and recognizable minifigures, forming a playful learning experience focused on the art of storytelling.
                    </p>
                </div>
                <div className="item item3">
                    <h2>What can you build with LEGO&reg; robots? And how?</h2>
                    <p>
                        Anything that comes to mind. With LEGO&reg; robots, your child will quickly learn to use their programming skills in the field of robotics and discover how to apply them to their own robots, machines, and models. The programming software is very easy to use. Simply drag and drop intuitive coding icons and blocks to add movements, functions, durations, and interactions in a sequence. Press &ldquo;Play&rdquo; and see the result! You have everything you need to enable your child to become a programming ace in no time.
                    </p>
                </div>
                <div className="item">
                    <img className="item-image" src={img4} alt="Third slide" />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Robotic;
