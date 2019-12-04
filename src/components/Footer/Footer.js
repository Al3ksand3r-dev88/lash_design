import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="link-list">
        <li>
          <Link
            to="/"
            onClick={() =>
              document.getElementById("section-top").scrollIntoView()
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/client"
            onClick={() =>
              document.getElementById("section-top").scrollIntoView()
            }
          >
            For client
          </Link>
        </li>
        <li>
          <Link
            to="/treatment"
            onClick={() =>
              document.getElementById("section-top").scrollIntoView()
            }
          >
            Treatment
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() =>
              document.getElementById("section-top").scrollIntoView()
            }
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="line" />
      <ul className="contact-list">
        <li>
          <h3>Contact Info</h3>
          <p>Phone: 072 922 01 97</p>
          <p>Email: lidia.dimitrijevic@gmail.com</p>
        </li>
        <div className="line" />
        <li>
          <h3>Social Media</h3>
          <Link to="/">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="/">
            <i className="fab fa-facebook"></i>
          </Link>
        </li>
      </ul>
      <div className="line" />
      <p className="summary">
        Lash Design | Mobile: 0739 220 197 | E-mail:
        lidia.dimitrijevic@gmail.com | Kräpplavägen 40, 141 40, Huddinge |
        <br />
        <br />
        &copy;2019 All rights reserved
      </p>
    </div>
  );
};

export default Footer;
