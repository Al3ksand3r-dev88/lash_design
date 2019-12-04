import React from "react";
import { Link } from "react-router-dom";
import "./Aside.scss";

const Aside = () => {
  let closeAside = () => {
    const elements = document.querySelectorAll(".side-menu, .overlay");
    elements.forEach(element => element.classList.remove("show"));
  };

  let handleLinks = id => {
    document.getElementById(id).scrollIntoView();
    const elements = document.querySelectorAll(".side-menu, .overlay");
    elements.forEach(element => element.classList.remove("show"));
  };
  return (
    <div className="side-menu">
      <span className="close-menu" onClick={closeAside}>
        &times;
      </span>
      <ul>
        <li>
          <Link to="/" onClick={() => handleLinks("section-top")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/client" onClick={() => handleLinks("section-top")}>
            For client
          </Link>
        </li>
        <li>
          <Link to="/treatment" onClick={() => handleLinks("section-top")}>
            Treatment
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => handleLinks("section-top")}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
