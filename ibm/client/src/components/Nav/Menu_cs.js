import React, { useState } from "react";
import { cs_list } from "components/Nav/menuList";
import NavSubMenu from "components/Nav/NavSubMenu";

const Menu_cs = ({ menuId }) => {
  const [listId, setListId] = useState("");
  const mouseEnter = (listId) => {
    setListId(listId);
  };
  return (
    <div className="navMenu_box">
      <div className="box">
        <ul>
          {cs_list.map((el, idx) => (
            <li
              key={idx}
              id={idx}
              onMouseEnter={(e) => mouseEnter(e.target.id)}
            >
              {el.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="box">
        <NavSubMenu menuId={menuId} listId={listId} />
      </div>
    </div>
  );
};

export default Menu_cs;
