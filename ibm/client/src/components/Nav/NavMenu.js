import React from "react";
import Menu_ps from "components/Nav/Menu_ps";
import Menu_cs from "components/Nav/Menu_cs";
import Menu_es from "components/Nav/Menu_es";
import Menu_more from "components/Nav/Menu_more";
const NavMenu = ({ menuId }) => {
  return (
    <div className="navMenu_container">
      {menuId === "ps" ? (
        <Menu_ps />
      ) : menuId === "cs" ? (
        <Menu_cs />
      ) : menuId === "es" ? (
        <Menu_es />
      ) : menuId === "more" ? (
        <Menu_more />
      ) : null}
    </div>
  );
};

export default NavMenu;
