import React from "react";
import Arrow from "components/Arrow";
const Section2 = () => {
  return (
    <div className="section" id="section2">
      <div className="section2_text">
        See what we're made of<span>.</span>
      </div>
      <div className="section2_companies">
        <div className="companies_container">
          <div id="companies_leftArrow">
            <Arrow />
          </div>
          <div id="companies_rightArrow">
            <Arrow />
          </div>
          <div className="companies_items">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="companies_scrollbar"></div>
      </div>
      <div className="section2_button">
        <button>See all Virgin Companies</button>
      </div>
      <div className="section2_blank"></div>
      <span className="bar"></span>
    </div>
  );
};

export default Section2;
