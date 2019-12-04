import React from "react";
import "./Navbar.scss";

const Navbar = props => {
  let openAside = () => {
    const elements = document.querySelectorAll(".side-menu, .overlay");
    elements.forEach(element => element.classList.add("show"));
  };

  let navClass = "navbar-container";
  if (props.show) {
    navClass = "navbar-container scroll";
  }
  return (
    <div className={navClass} onScroll={props.onScroll}>
      <div className="burger" onClick={openAside}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Navbar;
