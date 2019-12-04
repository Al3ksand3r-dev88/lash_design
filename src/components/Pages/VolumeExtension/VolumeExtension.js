import React from "react";
import Header from "../../Header/Header";

export default function VolumeExtension() {
  return (
    <>
      <Header secondHeading="Volume extension" />
      <div className="text-container" id="next">
        <h2>Treatment</h2>
        <div className="line" />
        <div className="text-content">
          <h3>How is a eyelash extension treatment performed?</h3>
          <p>
            You attach a synthetic lash to one of your own lashes. 75 - 95
            lashes are used per eye depending on how full of lashes you want.
            <span>
              The lashes are available in lengths from 7 - 16mm and thickness
              0.10 mm to 0.15 mm. Of course, it is good to mix the bends. You
              always mix the lengths to fit your own lashes.
            </span>
          </p>
        </div>
        <div className="text-content">
          <h3>Bending</h3>
          <p>
            <span>
              B - bend is the smallest bend and fits you who want a natural
              result.
            </span>
            <span>
              C - bend is the middle bend that suits you who usually bend your
              natural lashes.
            </span>
            <span>
              D - bend is the most curved lash that suits you who wants a more
              dramatic result.
            </span>
          </p>
        </div>
        <div className="text-content">
          <h3>Price</h3>
          <ul>
            <li>
              <p className="underline">New set: $65 (2-3hrs)</p>
            </li>
            <li>
              <p className="underline">Refill: $65 (120min)</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
