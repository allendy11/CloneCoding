import React, { useState, useRef } from "react";
import logo from "images/virgin_logo.png";
import RightArrow from "./RightArrow";
const Nav = () => {
  const mobileMenuRef = useRef([]);
  const aboutUsRef = useRef([]);
  const ourFoundationRef = useRef([]);
  const bransonFamilyRef = useRef([]);
  const virginRedRef = useRef([]);
  const navRef = useRef();
  const menuHandler = () => {
    navRef.current.classList.toggle("mobileMenu_active");
  };
  const [currentMenu, setCurrentMenu] = useState("");
  const mouseEnterHandler = (menu) => {
    setCurrentMenu(menu);
    // mobileMenuRef.current.map((el) => {
    //   el.classList.replace("select", "unselect");
    // });
    // mobileMenuRef.current[idx].classList.replace("unselect", "select");
  };
  const selectMenuHandler = (ref, idx) => {
    ref.map((el) => {
      el.classList.replace("select", "unselect");
    });
    ref[idx].classList.replace("unselect", "select");
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
                className="unselect"
                onMouseEnter={(e) => {
                  mouseEnterHandler(e.target.id);
                  selectMenuHandler(mobileMenuRef.current, 0);
                }}
                ref={(el) => (mobileMenuRef.current[0] = el)}
              >
                home
                <RightArrow />
              </li>
              <li
                id="companies"
                className="unselect"
                onMouseEnter={(e) => {
                  mouseEnterHandler(e.target.id);
                  selectMenuHandler(mobileMenuRef.current, 1);
                }}
                ref={(el) => (mobileMenuRef.current[1] = el)}
              >
                companies
                <RightArrow />
              </li>
              <li
                id="aboutUs"
                className="unselect"
                onMouseEnter={(e) => {
                  mouseEnterHandler(e.target.id);
                  selectMenuHandler(mobileMenuRef.current, 2);
                }}
                ref={(el) => (mobileMenuRef.current[2] = el)}
              >
                about us
                <RightArrow />
              </li>
              <li
                id="ourFoundation"
                className="unselect"
                onMouseEnter={(e) => {
                  mouseEnterHandler(e.target.id);
                  selectMenuHandler(mobileMenuRef.current, 3);
                }}
                ref={(el) => (mobileMenuRef.current[3] = el)}
              >
                our foundation
                <RightArrow />
              </li>
              <li
                id="bransonFamily"
                className="unselect"
                onMouseEnter={(e) => {
                  mouseEnterHandler(e.target.id);
                  selectMenuHandler(mobileMenuRef.current, 4);
                }}
                ref={(el) => (mobileMenuRef.current[4] = el)}
              >
                branson family
                <RightArrow />
              </li>
              <li
                id="virginRed"
                className="unselect"
                onMouseEnter={(e) => {
                  mouseEnterHandler(e.target.id);
                  selectMenuHandler(mobileMenuRef.current, 5);
                }}
                ref={(el) => (mobileMenuRef.current[5] = el)}
              >
                virgin red
                <RightArrow />
              </li>
            </ul>
          </div>
          <div className="content_box">
            {currentMenu === "aboutUs" ? (
              <ul className="aboutUs_items">
                <li
                  className="unselect"
                  onMouseEnter={(e) => selectMenuHandler(aboutUsRef.current, 0)}
                  ref={(el) => (aboutUsRef.current[0] = el)}
                >
                  about us
                  <RightArrow />
                </li>
                <li
                  className="unselect"
                  onMouseEnter={(e) => selectMenuHandler(aboutUsRef.current, 1)}
                  ref={(el) => (aboutUsRef.current[1] = el)}
                >
                  our story
                  <RightArrow />
                </li>
                <li
                  className="unselect"
                  onMouseEnter={(e) => selectMenuHandler(aboutUsRef.current, 2)}
                  ref={(el) => (aboutUsRef.current[2] = el)}
                >
                  timeline
                  <RightArrow />
                </li>
                <li
                  className="unselect"
                  onMouseEnter={(e) => selectMenuHandler(aboutUsRef.current, 3)}
                  ref={(el) => (aboutUsRef.current[3] = el)}
                >
                  working at virgin
                  <RightArrow />
                </li>
                <li
                  className="unselect"
                  onMouseEnter={(e) => selectMenuHandler(aboutUsRef.current, 4)}
                  ref={(el) => (aboutUsRef.current[4] = el)}
                >
                  latest
                  <RightArrow />
                </li>
                <li
                  className="unselect"
                  onMouseEnter={(e) => selectMenuHandler(aboutUsRef.current, 5)}
                  ref={(el) => (aboutUsRef.current[5] = el)}
                >
                  virgin group
                  <RightArrow />
                </li>
                <ul className="virginGroup_items">
                  <li
                    className="unselect"
                    onMouseEnter={(e) =>
                      selectMenuHandler(aboutUsRef.current, 6)
                    }
                    ref={(el) => (aboutUsRef.current[6] = el)}
                  >
                    overview
                    <RightArrow />
                  </li>
                  <li
                    className="unselect"
                    onMouseEnter={(e) =>
                      selectMenuHandler(aboutUsRef.current, 7)
                    }
                    ref={(el) => (aboutUsRef.current[7] = el)}
                  >
                    seniorteam
                    <RightArrow />
                  </li>
                  <li
                    className="unselect"
                    onMouseEnter={(e) =>
                      selectMenuHandler(aboutUsRef.current, 8)
                    }
                    ref={(el) => (aboutUsRef.current[8] = el)}
                  >
                    news
                    <RightArrow />
                  </li>
                </ul>
              </ul>
            ) : currentMenu === "ourFoundation" ? (
              <ul className="ourFoundation_items">
                <li
                  className="unselect"
                  onMouseEnter={(e) =>
                    selectMenuHandler(ourFoundationRef.current, 0)
                  }
                  ref={(el) => (ourFoundationRef.current[0] = el)}
                >
                  our foundation
                  <RightArrow />
                </li>
                <li
                  className="unselect"
                  onMouseEnter={(e) =>
                    selectMenuHandler(ourFoundationRef.current, 1)
                  }
                  ref={(el) => (ourFoundationRef.current[1] = el)}
                >
                  latest
                  <RightArrow />
                </li>
                <li
                  className="unselect"
                  onMouseEnter={(e) =>
                    selectMenuHandler(ourFoundationRef.current, 2)
                  }
                  ref={(el) => (ourFoundationRef.current[2] = el)}
                >
                  virgin unite website
                  <RightArrow />
                </li>
              </ul>
            ) : currentMenu === "bransonFamily" ? (
              <ul className="bransonFamily_items">
                <li
                  className="unselect"
                  onMouseEnter={(e) =>
                    selectMenuHandler(bransonFamilyRef.current, 0)
                  }
                  ref={(el) => (bransonFamilyRef.current[0] = el)}
                >
                  branson family
                  <RightArrow />
                </li>
                <li
                  className="unselect"
                  onMouseEnter={(e) =>
                    selectMenuHandler(bransonFamilyRef.current, 1)
                  }
                  ref={(el) => (bransonFamilyRef.current[1] = el)}
                >
                  richard branson's blog
                  <RightArrow />
                </li>
                <li
                  className="unselect"
                  onMouseEnter={(e) =>
                    selectMenuHandler(bransonFamilyRef.current, 2)
                  }
                  ref={(el) => (bransonFamilyRef.current[2] = el)}
                >
                  holly branson's blog
                  <RightArrow />
                </li>
                <li
                  className="unselect"
                  onMouseEnter={(e) =>
                    selectMenuHandler(bransonFamilyRef.current, 3)
                  }
                  ref={(el) => (bransonFamilyRef.current[3] = el)}
                >
                  books
                  <RightArrow />
                </li>
                <li
                  className="unselect"
                  onMouseEnter={(e) =>
                    selectMenuHandler(bransonFamilyRef.current, 4)
                  }
                  ref={(el) => (bransonFamilyRef.current[4] = el)}
                >
                  book a branson
                  <RightArrow />
                </li>
              </ul>
            ) : currentMenu === "virginRed" ? (
              <ul className="virginRed_items">
                <li
                  className="unselect"
                  onMouseEnter={(e) =>
                    selectMenuHandler(virginRedRef.current, 0)
                  }
                  ref={(el) => (virginRedRef.current[0] = el)}
                >
                  home
                  <RightArrow />
                </li>
                <li
                  className="unselect"
                  onMouseEnter={(e) =>
                    selectMenuHandler(virginRedRef.current, 1)
                  }
                  ref={(el) => (virginRedRef.current[1] = el)}
                >
                  spend
                  <RightArrow />
                </li>
                <li
                  className="unselect"
                  onMouseEnter={(e) =>
                    selectMenuHandler(virginRedRef.current, 2)
                  }
                  ref={(el) => (virginRedRef.current[2] = el)}
                >
                  earn
                  <RightArrow />
                </li>
                <li
                  className="unselect"
                  onMouseEnter={(e) =>
                    selectMenuHandler(virginRedRef.current, 3)
                  }
                  ref={(el) => (virginRedRef.current[3] = el)}
                >
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
