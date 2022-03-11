import React, { useState } from "react";
import { es_list } from "components/Nav/menuList";
import NavSubMenu from "components/Nav/NavSubMenu";
const Menu_es = ({ menuId }) => {
  const [listId, setListId] = useState("");
  const mouseEnter = (listId) => {
    setListId(listId);
  };
  return (
    <div className="navMenu_box">
      <div className="box">
        <ul>
          {es_list.map((el, idx) => (
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

export default Menu_es;
