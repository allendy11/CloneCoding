import React, { useState, useRef } from "react";
import logo from "images/virgin_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import RightArrow from "./RightArrow";
const Nav = () => {
  const mobileMenuRef = useRef();
  const navRef = useRef();
  const menuHandler = () => {
    navRef.current.classList.toggle("mobileMenu_active");
  };
  const [currentMenu, setCurrentMenu] = useState("");
  const mouseEnterHandler = (menu) => {
    setCurrentMenu(menu);
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
              <div className="text text_menu">menu</div>
              <div className="text text_close">close</div>
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
              <li
                id="home"
                onMouseEnter={(e) => mouseEnterHandler(e.target.id)}
              >
                home
                <RightArrow />
              </li>
              <li
                id="companies"
                onMouseEnter={(e) => mouseEnterHandler(e.target.id)}
              >
                companies
                <RightArrow />
              </li>
              <li
                id="aboutUs"
                onMouseEnter={(e) => mouseEnterHandler(e.target.id)}
              >
                about us
                <RightArrow />
              </li>
              <li
                id="ourFoundation"
                onMouseEnter={(e) => mouseEnterHandler(e.target.id)}
              >
                our foundation
                <RightArrow />
              </li>
              <li
                id="bransonFamily"
                onMouseEnter={(e) => mouseEnterHandler(e.target.id)}
              >
                branson family
                <RightArrow />
              </li>
              <li
                id="virginRed"
                onMouseEnter={(e) => mouseEnterHandler(e.target.id)}
              >
                virgin red
                <RightArrow />
              </li>
            </ul>
          </div>
          <div className="content_box">
            {currentMenu === "aboutUs" ? (
              <ul className="aboutUs_items">
                <li>
                  about us
                  <RightArrow />
                </li>
                <li>
                  our story
                  <RightArrow />
                </li>
                <li>
                  timeline
                  <RightArrow />
                </li>
                <li>
                  working at virgin
                  <RightArrow />
                </li>
                <li>
                  latest
                  <RightArrow />
                </li>
                <li>
                  virgin group
                  <RightArrow />
                </li>
                <ul className="virginGroup_items">
                  <li>
                    overview
                    <RightArrow />
                  </li>
                  <li>
                    seniorteam
                    <RightArrow />
                  </li>
                  <li>
                    news
                    <RightArrow />
                  </li>
                </ul>
              </ul>
            ) : currentMenu === "ourFoundation" ? (
              <ul className="ourFoundation_items">
                <li>
                  our foundation
                  <RightArrow />
                </li>
                <li>
                  latest
                  <RightArrow />
                </li>
                <li>
                  virgin unite website
                  <RightArrow />
                </li>
              </ul>
            ) : currentMenu === "bransonFamily" ? (
              <ul className="bransonFamily_items">
                <li>
                  branson family
                  <RightArrow />
                </li>
                <li>
                  richard branson's blog
                  <RightArrow />
                </li>
                <li>
                  holly branson's blog
                  <RightArrow />
                </li>
                <li>
                  books
                  <RightArrow />
                </li>
                <li>
                  book a branson
                  <RightArrow />
                </li>
              </ul>
            ) : currentMenu === "virginRed" ? (
              <ul className="virginRed_items">
                <li>
                  home
                  <RightArrow />
                </li>
                <li>
                  spend
                  <RightArrow />
                </li>
                <li>
                  earn
                  <RightArrow />
                </li>
                <li>
                  my rewards
                  <RightArrow />
                </li>
              </ul>
            ) : null}
          </div>
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
