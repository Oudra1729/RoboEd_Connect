//import React from 'react';
import '../../styles/Portfolio/Portfolio.css'; 
import image1 from '../../assets/Portfolio/Ajouter_un_titre-removebg-preview.png';
import image3 from '../../assets/Portfolio/oversight-bro (1).png';
import image2 from '../../assets/Portfolio/stock-photography-happiness-happy-man-image-royalty-free-man-removebg-preview.png';
import icon1 from '../../assets/Portfolio/encadrement.png';
import icon2 from '../../assets/Portfolio/anglais.png';
import icon3 from '../../assets/Portfolio/ordinateur-portable.png';
import icon4 from '../../assets/Portfolio/robot.png';
import { CgInstagram } from "react-icons/cg";
import { AiFillFacebook } from "react-icons/ai";
import { SlEnvolopeLetter } from "react-icons/sl";
//import { FaInstagramSquare } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import logo from '../../assets/Portfolio/logo.png'
function Home() {
  return (
    <section className="home">
      <div className="content">
        <div className="container-texts">
          <h4>Hello my Name is</h4>
          <h1>Karimi <span>Karim</span></h1>
          <h3>I am a passionate <span>educator</span>, <span>technology</span> enthusiast,<span> robotic</span> expert,<span>English</span>  teacher, and <span> coach.</span>.</h3>
        </div>
        <div className="container-images">
          <img src={image1} alt="" className="shape" />
          <img src={image2} alt="" className="pic" />
        </div>
      </div>
    </section>
  );
}


function About() {
  return (
    <section className="about">
      <div className="container-imgs">
        <img src={image3} alt="" />
      </div>
      <div className="container-texts">
        <h5><span>About </span>Me</h5>
        <p>
          I am a dedicated educator, passionate about technology, robotics, and English. With a focus on hands-on learning and student empowerment, I strive to cultivate curiosity and critical thinking in my students. As a coach, Iam committed to supporting their growth and success, both inside and outside the classroom.
        </p>
      </div>
    </section>
  );
}


function Services() {
  return (
    <section className="services">
      <h1 className="text-center" ><span>Our</span> Services</h1>
      <div className="box">
        <div className="card"><img className='icon' src={icon1} alt="" />
      <h5>Coaching</h5>
      <div className="par">
        <p>Achieve your goals with personalized coaching! Whether you&apos;re striving for academic success, personal growth, or career advancement, I&apos;ll provide the support, guidance, and encouragement you need to reach new heights.</p>
      </div></div>

      <div className="card"><img className='icon' src={icon2} alt="" />
      <h5>English</h5>
      <div className="par">
        <p>Unlock the power of language with me! Whether you&apos;re mastering grammar, refining your writing skills, or exploring literature, I&apos;ll be your guide on the path to becoming a confident and articulate communicator.</p>
      </div></div>

      <div className="card"><img className='icon' src={icon3} alt="" />
      <h5>Computer science</h5>
      <div className="par">
        <p>Explore the world of technology with me! From coding to digital design, I&apos;m here to guide you through the exciting realm of technology and help you develop the skills you need to thrive in today&apos;s digital landscape.</p>
      </div></div>

      <div className="card"><img className='icon' src={icon4} alt="" />
      <h5>Robotic</h5>
      <div className="par">
        <p>Let&apos;s build the future together! Dive into the fascinating world of robotics where you&apos;ll learn to design, program, and innovate with cutting-edge technology. Join me on an exciting journey of creativity and discovery.</p>
      </div></div>
      </div>
      
      
    </section>
  );
}


function Footer() {
  return (
    <div className="cont-all">
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="contacts-icon">
                <div className="single-cta">
                  <FaMapMarkerAlt className="phone" />
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span className="copy-span">Num 428, Bloc 7, Errachidia</span>
                  </div>
                </div>
              </div>
              <div className="contacts-icon">
                <div className="single-cta">
                  <BsFillTelephoneFill className="phone" />
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span className="copy-span">060000000</span>
                  </div>
                </div>
              </div>
              <div className="contacts-icon">
                <div className="single-cta">
                  <SlEnvolopeLetter className="phone" />
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span className="copy-span">centernewgeneration@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 ">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a className="copy-a" href="index.html">
                      <img
                        src={logo}
                        className="img-fluid"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="footer-text">
                    <p className="copy-p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odit aliquid mollitia officiis reiciendis sunt ipsa autem
                      fuga animi quae velit a esse eos repudiandae, assumenda
                      cum, minima consequatur eligendi architecto.
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <span  className="copy-span">Follow us</span>
                    <a className="copy-a" href="#">
                      <AiFillFacebook className="facebook-bg" />
                    </a>
                    <a className="copy-a" href="#">
                      <CgInstagram className="google-bg" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="copy-use">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul className="copy-ul">
                    <li className="copy-li">
                      <a className="copy-a" href="#">
                      Home
                      </a>
                    </li>
                    <li className="copy-li">
                      <a className="copy-a" href="#">
                      Portfolio
                      </a>
                    </li>
                    <li className="copy-li">
                      <a className="copy-a" href="#">
                      Contact us
                      </a>
                    </li>
                    <li className="copy-li">
                      <a className="copy-a" href="#">
                      Activities
                      </a>
                    </li>
                    <li className="copy-li">
                      <a className="copy-a" href="#">
                      Our services
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p className="copy-p">
                    Copyright © 2018, All Right Reserved{" "}
                    <a
                      className="copy-a"
                      href="https://codepen.io/anupkumar92/"
                    >
                      Anup
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}



export default function Portfolio() {
  return (
    <div >
      <Home />
      <About />
      <Services />
      <Footer/>
    </div>
  );
}