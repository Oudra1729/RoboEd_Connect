import { IoMdCall } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";
import "../../styles/Coaching/Navbar.css";
import logo from "../../assets/logo.png";

import "fontsource-quicksand";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleActivitiesClick = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  return (
    <div className="navbar">
      <div className="navbar-l">
        <div className="logo">
          <a href="http://localhost:5173/">
            <img src={logo} alt="" className="logo-atars" />
          </a>
        </div>

        <div className="element">
          <ul>
            <li className="li-li">
              <a href="">HOME</a>
            </li>
            <li className="li-li">
              <a href="#" onClick={handleActivitiesClick}>
                ACTIVITIES <IoIosArrowDown className="lo-acti" />
              </a>
              {showDropdown && ( // Render dropdown if showDropdown is true
                <ul className="dropdown">
                  <li className="li-drop">
                    <a href="Coaching">Coaching</a>
                  </li>
                  <li>
                    <a href="Informatics">Informatics</a>
                  </li>
                  <li>
                    <a href="English">English</a>
                  </li>
                  <li>
                    <a href="Robotics">Robotics</a>
                  </li>
                </ul>
              )}
            </li>
            <li className="li-li">
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
