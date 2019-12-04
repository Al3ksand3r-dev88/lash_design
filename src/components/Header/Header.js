import React from "react";
import "./Header.scss";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";
import arrow from "../../assets/img/down-arrow.png";
import { Link as ScrollLink } from "react-scroll";
import UseHook from "../UseHook/UseHook";
const Header = props => {
  const scroll = UseHook();
  return (
    <div className="header-container" id="section-top">
      <Navbar onScroll={() => scroll} show={scroll} />
      <div className="header-container-content animated fadeInUp delay-1s">
        <Link to="/">
          <img src={logo} alt="/" />
        </Link>
        <h1>
          Lash <span>Design</span>
        </h1>
        <p>{props.secondHeading}</p>
      </div>
      <ScrollLink
        to="next"
        spy={true}
        smooth={true}
        offset={-40}
        duration={1200}
      >
        <img
          className="arrow animated infinite pulse slow"
          src={arrow}
          alt="/"
        />
      </ScrollLink>
    </div>
  );
};

export default Header;
