import { IoMdCall } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";
import "../../styles/Coaching/Navbar.css";
import logo from "../../assets/Coaching/logo.png";

import "fontsource-quicksand";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleActivitiesClick = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  return (
    <>
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
                <a>
                  <Link to="/PageHome">HOME</Link>
                </a>
              </li>
              <li className="li-li">
                <a href="#" onClick={handleActivitiesClick}>
                  ACTIVITIES <IoIosArrowDown className="lo-acti" />
                </a>
                {showDropdown && ( // Render dropdown if showDropdown is true
                  <ul className="dropdown">
                    <li className="li-drop">
                      <a>
                        <Link to="/PageCoaching">Coaching</Link>
                      </a>
                    </li>
                    <li>
                      <a>
                        <Link to="/PageInformatique">Informatics</Link>
                      </a>
                    </li>
                    <li>
                      <a>
                        <Link to="/PageEnglish">English</Link>
                      </a>
                    </li>
                    <li>
                      <a>
                        <Link to="/PageRobotics">Robotics</Link>
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="li-li">
                <a>
                  <Link to="/PagePORTFOLIO">PORTFOLIO</Link>
                </a>
              </li>
            </ul>
          </div>

          <div className="button-sign">
            <button className="btn-cont">
              <a href="">
                <Link to="/" >
                  <IoMdCall className="call-sign" />
                  <span>CONTACT US</span>
                </Link>
              </a>
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
