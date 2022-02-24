import React, { useState, useRef } from "react";
import logo from "images/virgin_logo.png";
const Nav = () => {
  const mobileMenuRef = useRef();
  const menuHandler = () => {
    mobileMenuRef.current.classList.toggle("mobileMenu_active");
  };

  return (
    <div className="nav" id="nav">
      <div className="nav_container">
        <div className="navbar">
          <div className="nav_mobileMenu">
            <div className="mobileMenu_box" onClick={menuHandler}>
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

        <div className="mobileMenu_content" ref={mobileMenuRef}>
          <div className="content_box">
            <ul className="nav_items">
              <li>HOME</li>
              <li>COMPANIES</li>
              <li>ABOUT US</li>
              <li>OUR FOUNDATION</li>
              <li>BRANSON FAMILY</li>
              <li>VIRGIN RED</li>
            </ul>
          </div>
          <div className="mobileMenu_content_box"></div>
          <div className="mobileMenu_content_box"></div>
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
