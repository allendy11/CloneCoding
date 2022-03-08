import React, { useState } from "react";
const Menu_more = () => {
  const [listId, setListId] = useState("");

  return (
    <div className="navMenu_box">
      <div className="box">
        <ul>
          <li>파트너</li>
          <li>IBM 리서치</li>
          <li>IBM 정보</li>
          <li>COVID-19</li>
        </ul>
      </div>
      <div className="box"></div>
    </div>
  );
};

export default Menu_more;
