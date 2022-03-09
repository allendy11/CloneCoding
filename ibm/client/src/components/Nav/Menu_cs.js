import React, { useState } from "react";
import { cs_list } from "components/Nav/menuList";
const Menu_cs = () => {
  const [listId, setListId] = useState("");

  return (
    <div className="navMenu_box">
      <div className="box">
        <ul>
          {cs_list.map((el, idx) => (
            <li>{el.list}</li>
          ))}
        </ul>
      </div>
      <div className="box"></div>
    </div>
  );
};

export default Menu_cs;
