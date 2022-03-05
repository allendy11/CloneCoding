import React from "react";
import ibmLogo from "images/ibm_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Arrow from "components/Arrow";
const Nav = () => {
  return (
    <div id="Nav">
      <div className="nav_container">
        <div className="nav_box">
          <div id="ibm_logo">
            <img src={ibmLogo} alt="IBM" />
          </div>
          <div className="nav_menu">
            <div>
              제품 및 솔루션
              <Arrow />
            </div>
            <div className="bar"></div>
          </div>
          <div className="nav_menu">
            <div>
              컨설팅 및 서비스
              <Arrow />
            </div>
            <div className="bar"></div>
          </div>
          <div className="nav_menu">
            <div>
              교육 및 지원
              <Arrow />
            </div>
            <div className="bar"></div>
          </div>
          <div className="nav_menu">
            <div>
              더 둘러보기
              <Arrow />
            </div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="nav_box">
          <div className="nav_item">
            <input type="text" placeholder="검색"></input>
            <div>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
          <div className="nav_item">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="nav_item">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
