import React from "react";
import title_logo from "images/title_logo.svg";
const Nav = () => {
  return (
    <div id="Nav">
      <div className="nav_container">
        <div className="nav_box">
          <div className="logo">
            <img src={title_logo} alt="logo" />
          </div>
        </div>
        <div className="nav_box">
          <div className="nav_bar">
            <div className="nav_menu">
              <span>Solution</span>
              <span>About us</span>
              <span>Contact</span>
            </div>
            <div className="nav_icon">
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="nav_text">
            <p>Personalised</p>
            <p>Aviation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
