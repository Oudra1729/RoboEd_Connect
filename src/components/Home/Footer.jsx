import { CgInstagram } from "react-icons/cg";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import React from "react";
import "../../styles/Coaching/Footer.css";

import logo from '../../assets/Coaching/logo.png'
import { Link, Outlet } from "react-router-dom";
import PageHome from '../../components/Home/PageHome'

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
                      <Link to={PageHome}>Home</Link>
                      </a>
                    </li>
                    <li className="copy-li">
                      <a className="copy-a" href="#">
                      <Link to="">Portfolio</Link>
                      </a>
                    </li>
                    <li className="copy-li">
                      <a className="copy-a" href="#">
                      <Link to="/">Contact us</Link>
                      </a>
                    </li>
                    <li className="copy-li">
                      <a className="copy-a" href="#">
                      <Link to="/">Activities</Link>
                      </a>
                    </li>
                    <li className="copy-li">
                      <a className="copy-a" href="#">
                      <Link to="/">Our services</Link>
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
      <Outlet/>
    </div>
  );
}

export default Footer;
