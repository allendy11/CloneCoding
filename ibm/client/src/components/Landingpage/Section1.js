import React from "react";
import Arrow2 from "components/Arrow2";
const Section1 = () => {
  return (
    <div id="Section1" className="section">
      <div className="section1_contents">
        <div className="text_box">
          <p>엔터프라이즈 디지털 혁신</p>
          <p>플랫폼을 위한</p>
          <p>콘텐츠 라이브러리</p>
        </div>
        <div className="text_box">
          <p>하입브리드 멀티 클라우드 시대의 성공적인 디지털</p>
          <p>혁신을 위한 노하우 및 다양한 리소스를 만나보세요</p>
        </div>
        <div className="text_box">
          <div className="button">
            <p>라이브러리 방문하기</p>
            <Arrow2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
