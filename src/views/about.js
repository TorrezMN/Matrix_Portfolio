import "./css/about.css";

import { ReactP5Wrapper } from "react-p5-wrapper";

import sketch_about from "../comp/sketch_about.js";

function About() {
  return (
    <div id="about" className="aboutContainer">
      <h3 className="about-title">About</h3>
      <p className="about-description">
        Hi, I'm Milton. I consider myself a Solution Focused Developer. I try to
        keep up with technology and learn new things whenever possible. I like
        to develop things, but when I'm not busy writing or saving the world
        with Neo... I like to watch movies or go fishing.
      </p>

      <ReactP5Wrapper sketch={sketch_about} />
    </div>
  );
}

export default About;
