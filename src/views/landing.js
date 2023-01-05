import sketch from "../comp/sketch.js";
import { ReactP5Wrapper } from "react-p5-wrapper";

import "./css/landing.css";

function Index() {
  return (
    <div id="home" className="indexContainer">
      <div className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#tech">Tools</a>
        <a href="#projects">Projects</a>
      </div>
      <span className="title">Hi i'm Milton</span>
      <span className="sub-title">but people call me "Operator".</span>
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
}

export default Index;
