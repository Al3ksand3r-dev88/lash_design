import React from "react";
import "./Overlay.scss";

const Overlay = props => {
  let closeAside = () => {
    const elements = document.querySelectorAll(".side-menu, .overlay");
    elements.forEach(element => element.classList.remove("show"));
  };
  return <div className="overlay" onClick={closeAside}></div>;
};

export default Overlay;
