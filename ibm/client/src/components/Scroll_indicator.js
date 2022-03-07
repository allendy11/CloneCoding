import React from "react";
import Arrow from "components/Arrow";
const Scroll_indicator = ({
  currentPage,
  setCurrentPage,
  listLength,
  listRef,
}) => {
  const scrollHandler = (arrow) => {
    if (arrow === "section2_left") {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        listRef.current.scrollTo({
          left: (currentPage - 2) * 396,
          behavior: "smooth",
        });
      } else {
        setCurrentPage(listLength - 2);
        listRef.current.scrollTo({
          left: (listLength - 3) * 396,
          behavior: "smooth",
        });
      }
    } else if (arrow === "section2_right") {
      if (currentPage < listLength - 2) {
        setCurrentPage(currentPage + 1);
        listRef.current.scrollTo({
          left: currentPage * 396,
          behavior: "smooth",
        });
      } else {
        setCurrentPage(1);
        listRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <div id="Scroll_indicator">
      <div className="scroll_box">
        <div
          id="section2_left"
          className="arrow left"
          onClick={(e) => scrollHandler(e.target.id)}
        >
          <Arrow />
        </div>
        <div className="page">
          <span>{currentPage}</span>
          <span>/</span>
          <span>{listLength - 2}</span>
        </div>
        <div
          id="section2_right"
          className="arrow right"
          onClick={(e) => scrollHandler(e.target.id)}
        >
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default Scroll_indicator;
