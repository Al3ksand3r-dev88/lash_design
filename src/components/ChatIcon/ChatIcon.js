import React from "react";
import "./ChatIcon.scss";

export default function ChatIcon(props) {
  let addClass = "chat-icon";
  if (props.show) {
    addClass = "chat-icon show";
  }
  return (
    <a
      href="https://wa.me/64212993954

"
      className={addClass}
    >
      Chat with me <i className="fab fa-whatsapp"></i>
    </a>
  );
}
