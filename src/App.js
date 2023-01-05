import "./App.css";

import Index from "./views/landing.js";
import About from "./views/about.js";
import Tech from "./views/tech.js";
import Projects from "./views/projects.js";
import Contact from "./views/contact.js";

function App() {
  return (
    <div className="App">
      <Index />
      <About />
      <Tech />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
