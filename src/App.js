import React from "react";
import Home from "./components/Pages/Home/Home";
import Client from "./components/Pages/Client/Client";
import SingleExtension from "./components/Pages/SingleExtension/SingleExtension";
import VolumeExtension from "./components/Pages/VolumeExtension/VolumeExtension";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";
import Overlay from "./components/Overlay/Overlay";
import ChatIcon from "./components/ChatIcon/ChatIcon";
import Contact from "./components/Pages/Contact/Contact";
import Treatment from "./components/Pages/Treatment/Treatment";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./assets/img/logo.jpg";
import Favicon from "react-favicon";
import UseHook from "./components/UseHook/UseHook";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/scss/media.scss";
AOS.init({ once: true, duration: 500 });

function App() {
  const scroll = UseHook();
  return (
    <Router>
      <Favicon url={logo} />
      <Overlay />
      <Aside />
      <Route path="/" exact component={Home} />
      <Route path="/client" component={Client} />
      <Route path="/treatment" component={Treatment} />
      <Route path="/single-extension" component={SingleExtension} />
      <Route path="/volume-extension" component={VolumeExtension} />
      <Route path="/contact" component={Contact} />
      <ChatIcon show={scroll} />
      <Footer />
    </Router>
  );
}

export default App;
