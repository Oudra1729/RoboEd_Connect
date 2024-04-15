import { IoMdCall } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import React from "react";
import "../../styles/Coaching/Navbar.css";
import logo from "../../assets/logo.png";

import "fontsource-quicksand";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-l">
        <div className="logo">
          <img src={logo} alt="" className="logo-atars" />
        </div>

        <div className="element">
          <ul>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">
                ACTIVITIES <IoIosArrowDown className="lo-acti" />
              </a>
            </li>
            <li>
              <a href="">PORTFOLIO</a>
            </li>
          </ul>
        </div>

        <div className="button-sign">
          <button className="btn-cont">
            <a href="">
              <IoMdCall className="call-sign" />
              <span>CONTACT US</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
