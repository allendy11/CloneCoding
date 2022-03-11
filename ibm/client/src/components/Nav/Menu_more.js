import React, { useState } from "react";
import { more_list } from "components/Nav/menuList";
import NavSubMenu from "components/Nav/NavSubMenu";
const Menu_more = ({ menuId }) => {
  const [listId, setListId] = useState("");
  const mouseEnter = (listId) => {
    setListId(listId);
  };
  return (
    <div className="navMenu_box">
      <div className="box">
        <ul>
          {more_list.map((el, idx) => (
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

export default Menu_more;
