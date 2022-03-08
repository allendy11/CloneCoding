import React, { useState } from "react";
const Menu_es = () => {
  const [listId, setListId] = useState("");
  return (
    <div className="navMenu_box">
      <div className="box">
        <ul>
          <li>지원</li>
          <li>문서</li>
          <li>개발자 교육</li>
          <li>교육/훈련</li>
          <li>리소스</li>
          <li>알아보기</li>
        </ul>
      </div>
      <div className="box"></div>
    </div>
  );
};

export default Menu_es;
