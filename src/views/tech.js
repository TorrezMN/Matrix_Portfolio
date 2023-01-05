import { ReactP5Wrapper } from "react-p5-wrapper";

import "./css/tech.css";

import sketch_2 from "../comp/sketch_2.js";

function Tech() {
  return (
    <div id="tech" className="techContainer">
      <h3 className="tech-title">Tools I Use</h3>

      <ReactP5Wrapper sketch={sketch_2} />
    </div>
  );
}

export default Tech;
