import React from "react";
import Menu_ps from "components/Nav/Menu_ps";
import Menu_cs from "components/Nav/Menu_cs";
import Menu_es from "components/Nav/Menu_es";
import Menu_more from "components/Nav/Menu_more";
const NavMenu = ({ menuId }) => {
  return (
    <div className="navMenu_container">
      {menuId === "ps" ? (
        <Menu_ps menuId={menuId} />
      ) : menuId === "cs" ? (
        <Menu_cs menuId={menuId} />
      ) : menuId === "es" ? (
        <Menu_es menuId={menuId} />
      ) : menuId === "more" ? (
        <Menu_more menuId={menuId} />
      ) : null}
    </div>
  );
};

export default NavMenu;
