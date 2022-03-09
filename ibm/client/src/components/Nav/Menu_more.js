import React, { useState } from "react";
import { more_list } from "components/Nav/menuList";
const Menu_more = () => {
  const [listId, setListId] = useState("");

  return (
    <div className="navMenu_box">
      <div className="box">
        <ul>
          {more_list.map((el, idx) => (
            <li>{el.list}</li>
          ))}
        </ul>
      </div>
      <div className="box"></div>
    </div>
  );
};

export default Menu_more;
