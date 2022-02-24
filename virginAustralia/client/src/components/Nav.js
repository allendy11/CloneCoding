import React, { useState, useRef } from "react";
import logo from "images/virgin_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  const mobileMenuRef = useRef();
  const navRef = useRef();
  const menuHandler = () => {
    // mobileMenuRef.current.classList.toggle("mobileMenu_active");
    navRef.current.classList.toggle("mobileMenu_active");
  };

  return (
    <div className="nav" id="nav">
      <div className="nav_container" ref={navRef}>
        <div className="navbar">
          <div className="nav_mobileMenu" onClick={menuHandler}>
            <div className="mobileMenu_box">
              <div className="mobileMenu_icon">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
              <div className="mobileMenu_text">MENU</div>
            </div>
            <div className="mobileMenu_box"></div>
          </div>
          <div className="nav_title">
            <img src={logo} alt="Virgin" />
          </div>
        </div>

        <div className="mobileMenu_content">
          <div className="content_box">
            <ul className="nav_items">
              <li>
                HOME
                <div className="icon_RightArrow">
                  <FontAwesomeIcon icon={faArrowRight} color=" #ce2f22" />
                </div>
              </li>
              <li>
                COMPANIES{" "}
                <div className="icon_RightArrow">
                  <FontAwesomeIcon icon={faArrowRight} color=" #ce2f22" />
                </div>
              </li>
              <li>
                ABOUT US{" "}
                <div className="icon_RightArrow">
                  <FontAwesomeIcon icon={faArrowRight} color=" #ce2f22" />
                </div>
              </li>
              <li>
                OUR FOUNDATION{" "}
                <div className="icon_RightArrow">
                  <FontAwesomeIcon icon={faArrowRight} color=" #ce2f22" />
                </div>
              </li>
              <li>
                BRANSON FAMILY{" "}
                <div className="icon_RightArrow">
                  <FontAwesomeIcon icon={faArrowRight} color=" #ce2f22" />
                </div>
              </li>
              <li>
                VIRGIN RED{" "}
                <div className="icon_RightArrow">
                  <FontAwesomeIcon icon={faArrowRight} color=" #ce2f22" />
                </div>
              </li>
            </ul>
          </div>
          <div className="content_box"></div>
          <div className="content_box"></div>
        </div>

        <div className="navbar">
          <ul className="nav_items">
            <li>COMPANIES</li>
            <li>ABOUT US</li>
            <li>OUR FOUNDATION</li>
            <li>BRANSON FAMILY</li>
            <li>VIRGIN RED</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
