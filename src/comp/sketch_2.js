class Tech {
  constructor(p5, tech, val, is_lang) {
    this.tech = tech;
    this.is_lang = is_lang;
    this.val = val;
    // this.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.color = "rgb(0,255,0)";
    this.p5 = p5;
    this.pos = this.p5.createVector(
      this.p5.random(50, this.p5.windowWidth - 50),
      this.p5.random(50, this.p5.windowHeight * 0.5 - 50)
    );
    this.acc = this.p5.createVector(
      Math.floor(this.p5.random(1, 10)) > 5 ? 0 : this.p5.random(1, 5),
      Math.floor(this.p5.random(1, 10)) > 5 ? this.p5.random(1, 5) : 0
    );
  }
  update() {
    if (this.pos.x < 0 || this.pos.x > this.p5.windowWidth) {
      this.acc.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > this.p5.windowHeight * 0.7) {
      this.acc.y *= -1;
    }
    this.pos.x += this.acc.x;
    this.pos.y += this.acc.y;
    // Draw tech.
    this.draw();
  }
  draw() {
    this.p5.push();
    this.p5.fill(this.color);
    if (this.is_lang) {
      // this.p5.strokeWeight(2);
      this.p5.stroke("white");
    } else {
      this.p5.stroke(this.color);
    }
    this.p5.textFont("Open Sans Condensed");
    this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
    this.p5.textSize(this.val);
    this.p5.text(this.tech, this.pos.x, this.pos.y);
    this.p5.pop();
  }
}

// Sketch Config

var t = [];
function sketch_2(p5) {
  p5.preload = () => {
    // Adding technologies.
    // Lenguages
    t.push(new Tech(p5, "Python", 80, true));
    t.push(new Tech(p5, "Javascript", 80, true));
    // Frameworks
    t.push(new Tech(p5, "Django", 50, false));
    t.push(new Tech(p5, "React Native", 30, false));
    t.push(new Tech(p5, "Bootstrap", 50, false));
    t.push(new Tech(p5, "Django Rest Framework", 30, false));
    t.push(new Tech(p5, "Materialize", 30, false));
    t.push(new Tech(p5, "Chart.js", 30, false));
    t.push(new Tech(p5, "Redux", 20, false));
    t.push(new Tech(p5, "Pandas", 30, false));
    t.push(new Tech(p5, "Git", 50, false));
    t.push(new Tech(p5, "Gitlab", 50, false));
    t.push(new Tech(p5, "Github", 50, false));
    t.push(new Tech(p5, "Heroku", 20, false));
    t.push(new Tech(p5, "PostgreSQL", 40, false));
    t.push(new Tech(p5, "Google", 60, true));
    t.push(new Tech(p5, "StackOverflow", 40, true));
    t.push(
      new Tech(
        p5,
        "Some secret spy shit that I'm not allowed to reveal.",
        15,
        false
      )
    );
  };

  p5.setup = () => {
    p5.frameRate(25);
    let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight * 0.7);
    p5.background(0);
  };
  p5.draw = () => {
    p5.background(0);

    for (let i of t) {
      i.update();
    }
  };
}

export default sketch_2;
