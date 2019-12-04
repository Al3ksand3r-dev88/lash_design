import React from "react";
import "./MainContainer.scss";
import { Link } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="main-container" id="next">
      <div className="section bg-gradient">
        <h1>
          Lash <span>Design</span>
        </h1>
        <div className="line" />
        <p>
          - a newly opened company founded by me, Lidia Dimitrijevic, in 2019. I
          am currently being trained at Lashia Salong Extension and give all my
          customers a reduced price until I receive my final certificate.
        </p>
      </div>
      <div className="section" id="bg-img-woman">
        <div className="m-center" data-aos="fade-up">
          <h1>What I Offer?</h1>
          <div className="line" />
          <ul className="list-offer">
            <li>Single extension</li>
            <li>Volume extension</li>
            <li>Extension bending</li>
            <li>Care products</li>
            <li>Advice for client</li>
          </ul>
        </div>
        <Link
          to="/contact"
          className="btn-book-now"
          data-aos="zoom-in"
          onClick={() =>
            document
              .getElementById("next")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Book now
        </Link>
      </div>
      <div className="section grid">
        <div className="link-container">
          <h2>For client</h2>
          <Link
            to="/client"
            onClick={() =>
              document.getElementById("section-top").scrollIntoView()
            }
          >
            <div className="link-item" id="client"></div>
          </Link>
        </div>
        <div className="link-container">
          <h2>Treatments</h2>
          <Link
            to="/treatment"
            onClick={() =>
              document.getElementById("section-top").scrollIntoView()
            }
          >
            <div className="link-item" id="treatment"></div>
          </Link>
        </div>
        <div className="link-container">
          <h2>Book now</h2>
          <Link
            to="/contact"
            onClick={() =>
              document.getElementById("section-top").scrollIntoView()
            }
          >
            <div className="link-item" id="book-now"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
