import React, { useState, useRef } from "react";
import { insideIBM_list } from "components/Landingpage/Section2/insideIBM_list";
import Arrow from "components/Arrow";
import Arrow2 from "components/Arrow2";
import Scroll_indicator from "components/Scroll_indicator";
const Section2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const listRef = useRef();

  return (
    <div id="Section2" className="section">
      <div className="section2_box">
        <div className="insideIBM_text">
          <p>Insiade IBM</p>
          <div>
            AI 기반 비즈니스 자동화를 실현하기 위한 단계별 접근방법 및 솔루션에
            대해 안내합니다.
          </div>
        </div>
      </div>
      <div className="section2_box">
        <div className="insideIBM_list" ref={listRef}>
          {insideIBM_list.map((el, idx) => {
            return (
              <div className="item" key={idx}>
                <div className="item_image">
                  <img src={el.image} alt="" />
                </div>
                <div className="item_text">
                  <p>{el.title}</p>
                  <p>{el.content}</p>
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
          listLength={insideIBM_list.length}
          listRef={listRef}
        />
      </div>
    </div>
  );
};

export default Section2;
