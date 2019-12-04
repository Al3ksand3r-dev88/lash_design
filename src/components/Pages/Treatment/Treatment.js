import React from "react";
import Header from "../../Header/Header";
import { Link } from "react-router-dom";

export default function Treatment() {
  return (
    <div>
      <Header secondHeading="Treatment" />
      <div className="text-container" id="next">
        <h2>Treatment</h2>
        <div className="line" />
        <div className="text-content">
          <h3>How is a eyelash extension treatment performed?</h3>
          <p>
            With us you as a customer get tips on what you can think of before a
            visit and what products you should use to get the best results.
            <span>
              Click on the links below to get more information about prices and
              other things that might be worth thinking about before, during and
              after a treatment.
            </span>
          </p>
        </div>
      </div>
      <div className="section grid">
        <div className="link-container">
          <h2>Single extension</h2>
          <Link
            to="/single-extension"
            onClick={() =>
              document.getElementById("section-top").scrollIntoView()
            }
          >
            <div className="link-item" id="single-extension"></div>
          </Link>
        </div>
        <div className="link-container">
          <h2>Volume extension</h2>
          <Link
            to="/volume-extension"
            onClick={() =>
              document.getElementById("section-top").scrollIntoView()
            }
          >
            <div className="link-item" id="volume-extension"></div>
          </Link>
        </div>
        <div className="link-container">
          <h2>Mix extension</h2>
          <Link
            to="/"
            onClick={() =>
              document.getElementById("section-top").scrollIntoView()
            }
          >
            <div className="link-item" id="mix-extension"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
