import React, { useState } from "react";
const Menu_ps = () => {
  const [listId, setListId] = useState("");
  return (
    <div className="navMenu_box">
      <div className="box">
        <ul>
          <li>핵심 솔루션</li>
          <li>주요 제품 및 플랫폼</li>
          <li>산업군</li>
          <li>AI 인공지능</li>
          <li>자동화</li>
          <li>블록체인</li>
          <li>비즈니스 운영</li>
          <li>클라우드 컴퓨팅</li>
          <li>데이터/분석</li>
          <li>IT 인프라 관리</li>
          <li>보안</li>
          <li>공급망 관리</li>
          <li>글로벌 파이낸싱</li>
          <li>모든 제품 보기</li>
        </ul>
      </div>
      <div className="box"></div>
    </div>
  );
};

export default Menu_ps;
