import React from "react";
import { ps_list, cs_list, es_list, more_list } from "components/Nav/menuList";
const NavSubMenu = ({ menuId, listId }) => {
  let list = {};
  if (menuId === "ps") {
    [list] = ps_list.filter((el) => el.id == listId);
  } else if (menuId === "cs") {
    [list] = cs_list.filter((el) => el.id == listId);
  } else if (menuId === "es") {
    [list] = es_list.filter((el) => el.id == listId);
  } else if (menuId === "more") {
    [list] = more_list.filter((el) => el.id == listId);
  }
  return (
    <div id="NavSubMenu">
      <span>{list.name}</span>
      <ul>
        {list.children.map((el, idx) => {
          return (
            <li key={idx}>
              <span>{el}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavSubMenu;
