import React, { useState } from "react";
import { ps_list } from "components/Nav/menuList";
const Menu_ps = () => {
  const [listId, setListId] = useState("");
  return (
    <div className="navMenu_box">
      <div className="box">
        <ul>
          {ps_list.map((el) => {
            return <li>{el.list}</li>;
          })}
        </ul>
      </div>
      <div className="box"></div>
    </div>
  );
};

export default Menu_ps;
