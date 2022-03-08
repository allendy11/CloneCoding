import React from "react";

const Section6 = () => {
  return (
    <div id="Section6" className="section">
      <div className="section6_box">
        <ul>
          <p>Discover</p>
          <li>제품</li>
          <li>무료 체험</li>
          <li>서비스</li>
          <li>IBM 리서치</li>
          <li>파이낸싱</li>
        </ul>
        <ul>
          <p>Information for...</p>
          <li>developerWorks Korea</li>
          <li>파트너</li>
        </ul>
        <ul>
          <p>Connecting with us</p>
          <li>IBM 컨설팅</li>
          <li>고객지원</li>
          <li>IBM에 문의</li>
        </ul>
        <ul>
          <p>About IBM</p>
          <li>채용안내</li>
          <li>최근뉴스</li>
          <li>IBM 이벤트 (영문)</li>
          <li>투자자 정보 (영문)</li>
          <li>기업의 책임 (영문)</li>
          <li>회사소개</li>
        </ul>
      </div>
      <div className="section6_box">
        <div className="language">
          <span>국가 지역 선택</span>
          <select name="lang" id="lang">
            <option value="kor">Korea, Republic of - Korean</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Section6;
