import React, { useState, useRef } from "react";
import ibmLogo from "images/ibm_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Arrow from "components/Arrow";
import NavMenu from "components/Nav/NavMenu";
const Nav = () => {
  const [menuId, setMenuId] = useState("");
  const navMenuRef = useRef();
  const mouseEnter = (id) => {
    setMenuId(id);
    navMenuRef.current.classList.add("navMenu_active");
  };
  const mouseLeave = () => {
    navMenuRef.current.classList.remove("navMenu_active");
  };
  return (
    <div id="Nav">
      <div className="nav_container">
        <div className="nav_box">
          <div id="ibm_logo">
            <img src={ibmLogo} alt="IBM" />
          </div>
          <div
            id="ps"
            className="nav_menu"
            onMouseEnter={(e) => mouseEnter(e.target.id)}
          >
            <div>
              제품 및 솔루션
              <Arrow />
            </div>
            <div className="bar"></div>
          </div>
          <div
            id="cs"
            className="nav_menu"
            onMouseEnter={(e) => mouseEnter(e.target.id)}
          >
            <div>
              컨설팅 및 서비스
              <Arrow />
            </div>
            <div className="bar"></div>
          </div>
          <div
            id="es"
            className="nav_menu"
            onMouseEnter={(e) => mouseEnter(e.target.id)}
          >
            <div>
              교육 및 지원
              <Arrow />
            </div>
            <div className="bar"></div>
          </div>
          <div
            id="more"
            className="nav_menu"
            onMouseEnter={(e) => mouseEnter(e.target.id)}
          >
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
      <div
        id="NavMenu"
        className="navMenu"
        ref={navMenuRef}
        onMouseLeave={() => mouseLeave()}
      >
        <NavMenu menuId={menuId} mouseLeave={mouseLeave} />
        <div className="close_menu" onClick={() => mouseLeave()}>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default Nav;
