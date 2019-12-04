import React from "react";
import "./Client.scss";
import Header from "../../Header/Header";

export default function Client() {
  return (
    <>
      <Header secondHeading="For client" />
      <div className="text-container" id="next">
        <h2>Questions & Answers</h2>
        <div className="line" />
        <div className="text-content">
          <h3>How is a eyelash extension treatment performed?</h3>
          <p>
            We discuss of the length, shape and thickness of the lash extension
            that is optimal for your eyelashes and eye color. You are
            comfortably immersed on a massage table and can sit back on a memory
            foam pillow. I attach an "Under eye patch" to your lower lashes.
            Then it's time to close your eyes and relax.
          </p>
        </div>
        <div className="text-content">
          <h3>How long does a eyelash extension last?</h3>
          <p>
            Many factors determine how well your lash extension lasts. Your own
            lash life cycle is normally 6-8 weeks. It then falls naturally and a
            new lash grows out. For some people, the lashes are replaced more
            quickly and often have to come back already after 2 weeks for
            refilling. So if you know that your hair and your nails are growing
            fast, probably your lashes will too. Some people have very "oily"
            lashes naturally.
            <span>
              This means that the loose face may not attach as well to your own
              lash. Just as you lose your hair faster on your head, you
              naturally lose 2 - 5 lashes a day. A properly applied eyelash
              extension normally lasts 3 - 5 weeks. Most clients have between 30
              - 50% of their loose lashes remaining after 3 weeks. That's when I
              recommend coming back for a refill.
            </span>
          </p>
        </div>

        <div className="text-content">
          <h3>How many loose lashes are needed for a lash extension?</h3>
          <p>
            A person has between 50 - 130 lashes on the eye, depending on the
            genes, origin and age. Older people generally have fewer lash than
            younger ones. A certified Eyelash Designer should at least be able
            to put 65 lashes per eye but usually you put about 80 - 120 lashes
            per eye in two hours.
          </p>
        </div>

        <div className="text-content">
          <h3>Which method is included in an eyelash extension?</h3>
          <p className="underline">Single lashes:</p>
          <p>
            The lashes are applied one by one on your own lashes. We discuss the
            length, bend and shape that suits you.
          </p>
          <p className="underline">Volume lashes:</p>
          <p>
            I put together 2 - 7 super thin lashes for a bouquet that is applied
            to each individual lash. This brings a fuller result to your
            eyelashes.
          </p>
          <p className="underline">Flat lashes/ Black Diamond:</p>
          <p>
            Flat lashes or Black Diamond as it is also called are flat in shape,
            unlike the most commonly used single lash. This is a look that can
            be reminiscent of volume as it becomes denser, but which is applied
            in the same way as with the single lash.
          </p>
        </div>

        <div className="text-content border-bottom-none">
          <h3>How should I prepare myself before a treatment?</h3>
          <p>
            Before the visit you should have washed your lashes with lash
            cleaning or with me. No oil-based products should be used before or
            after the treatment on the lashes as it dissolves the adhesive. If
            you have had an eye inflammation or a sty, do not make a lash
            extension until at least 3 weeks afterwards.
          </p>
        </div>
      </div>
    </>
  );
}
