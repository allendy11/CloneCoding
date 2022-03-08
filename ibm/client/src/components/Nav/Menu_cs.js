import React, { useState } from "react";

const Menu_cs = () => {
  const [listId, setListId] = useState("");

  return (
    <div className="navMenu_box">
      <div className="box">
        <ul>
          <li>IBM Consulting</li>
          <li>비즈니스 프로세스 서비스</li>
          <li>디자인 및 비즈니스 전략</li>
          <li>하이브리드 멀티클라우드 서비스</li>
          <li>인재 관리 및 혁신</li>
          <li>애플리케이션 서비스</li>
          <li>보안 서비스</li>
          <li>기술 지원 서비스</li>
          <li>글러벌 파이낸싱</li>
          <li>모든 서비스 보기</li>
        </ul>
      </div>
      <div className="box"></div>
    </div>
  );
};

export default Menu_cs;
