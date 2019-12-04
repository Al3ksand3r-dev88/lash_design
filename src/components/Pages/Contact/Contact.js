import React, { useState } from "react";
import Header from "../../Header/Header";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [treatment, setTreatment] = useState("");

  let handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <Header secondHeading="Contact" />
      <div className="text-container" id="next">
        <h2>Book online</h2>
        <div className="line" />
        <div className="text-content">
          <p>
            Fill in the form and type of treatment you wish to perform and I
            will contact you as soon as possible!
            <span>
              Field's with an <span className="red">*</span> are required
            </span>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex-container">
            <div>
              <label htmlFor="fname">
                Enter first name<span> *</span>
              </label>
              <input
                type="text"
                id="fname"
                placeholder="Your first name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lname">
                Enter last name<span> *</span>
              </label>
              <input
                type="text"
                id="lname"
                placeholder="Your last name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
          </div>
          <label htmlFor="email">
            Enter your E-mail<span> *</span>
          </label>
          <input
            type="text"
            id="email"
            placeholder="Your e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="message">Write a message (Optional)</label>
          <textarea
            id="message"
            placeholder="Enter message here"
            value={message}
            onChange={e => setMessage(e.target.value)}
          ></textarea>
          <label htmlFor="treatments">
            Select a treatment <span> *</span>
          </label>
          <select
            id="treatment"
            value={treatment}
            onChange={e => setTreatment(e.target.value)}
          >
            <option value="single-new">
              Single extension | New set $55 (2-3hrs)
            </option>
            <option value="single-refill">
              Single extension | Refill $45 (120min)
            </option>
            <option value="volume-new">
              Volume extension | New set $65 (2-3hrs)
            </option>
            <option value="volume-refill">
              Volume extension | Refill $65 (120min)
            </option>
          </select>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
