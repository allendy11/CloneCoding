import React, { useRef, useState } from "react";
import Arrow from "components/Arrow";
const Section2 = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const boxRef = useRef();
  const scrollHandler = (arrow) => {
    if (arrow === "companies_leftArrow" && scrollPos > 0) {
      boxRef.current.scrollTo({
        left: scrollPos - 1248,
        behavior: "smooth",
      });
      setScrollPos(scrollPos - 1248);
    } else if (arrow === "companies_rightArrow" && scrollPos < 3744) {
      boxRef.current.scrollTo({
        left: scrollPos + 1248,
        behavior: "smooth",
      });
      setScrollPos(scrollPos + 1248);
    }
  };
  return (
    <div className="section" id="section2">
      <div className="section2_text">
        See what we're made of<span>.</span>
      </div>
      <div className="section2_companies">
        <div className="companies_container">
          <div
            id="companies_leftArrow"
            className="companies_arrow"
            onClick={(e) => scrollHandler(e.target.id)}
          >
            <Arrow />
          </div>
          <div
            id="companies_rightArrow"
            className="companies_arrow"
            onClick={(e) => scrollHandler(e.target.id)}
          >
            <Arrow />
          </div>
          <div className="companies_items" ref={boxRef}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
          </div>
        </div>
        <div className="companies_scrollbar">
          <div className="scroll_indicator">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
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
