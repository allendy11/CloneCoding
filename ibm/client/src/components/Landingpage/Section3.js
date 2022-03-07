import React, { useState, useRef } from "react";
import { itemList } from "components/Landingpage/Section3/itemList";
import Arrow2 from "components/Arrow2";
import Scroll_indicator from "components/Scroll_indicator";
const Section3 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const listRef = useRef();
  return (
    <div id="Section3" className="section">
      <div className="section3_box">
        <div className="text">제품 체험판 및 오퍼 살펴보기</div>
      </div>
      <div className="section3_box">
        <div className="item_list" ref={listRef}>
          {itemList.map((el, idx) => {
            return (
              <div className="item" key={idx}>
                <div className="item_image">
                  <img src={el.image} alt={el.title} />
                </div>
                <div className="item_text">
                  <p>{el.title}</p>
                  <p>{el.content1}</p>
                  <p>{el.content2}</p>
                </div>
                <div className="button">
                  <p>자세히 보기</p>
                  <Arrow2 />
                </div>
              </div>
            );
          })}
        </div>
        <Scroll_indicator
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          listLength={itemList.length}
          listRef={listRef}
        />
      </div>
    </div>
  );
};

export default Section3;
