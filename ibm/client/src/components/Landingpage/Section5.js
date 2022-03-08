import React from "react";
import Arrow2 from "components/Arrow2";
const Section5 = () => {
  return (
    <div id="Section5" className="section">
      <div className="section5_box">
        <div className="text1">
          <span> 데이터 및 인공지능(AI) 전용 온라인 도서관</span>
        </div>
        <div className="text2">
          <span>
            데이터 및 AI 활용을 위한 콘텐츠 라이브러리에서 IBM이 제시하는 AI
            사다리 단계별 리소스를 확인해보세요
          </span>
        </div>
        <div className="button">
          <div>콘텐츠 라이브러리 바로가기</div>
          <Arrow2 />
        </div>
      </div>
      <div className="section5_box">
        <div className="text1">
          <span> 새롭게 거듭난 IBM Consulting</span>
        </div>
        <div className="text2">
          <span>
            기업이 직면하고 있는 다양한 변화와 기회를 IBM Consulting과 함께
            하세요.
          </span>
        </div>
        <div className="button">
          <div>IBM Consulting 만나보기</div>
          <Arrow2 />
        </div>
      </div>
    </div>
  );
};

export default Section5;
