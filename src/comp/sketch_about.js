class Cat {
  constructor(p5, img) {
    this.p5 = p5;
    this.img = img;
    this.pos = this.p5.createVector(
      this.p5.random(this.p5.windowWidth * 0.05, this.p5.windowWidth * 0.5),
      this.p5.random(0, this.p5.windowHeight * 0.5)
    );
  }
  update() {
    this.draw();
  }
  draw() {
    this.p5.push();
    this.p5.image(
      this.img,
      this.pos.x,
      this.pos.y,
      this.p5.windowWidth * 0.6,
      this.p5.windowHeight * 0.6,
      250
    );
    this.p5.pop();
  }
}

var CAT =
  "https://cdn.pixabay.com/photo/2017/11/13/07/14/cats-eyes-2944820_960_720.jpg";

function sketch_about(p5) {
  var cat;
  let img;
  p5.preload = () => {
    img = p5.loadImage(CAT);
    cat = new Cat(p5, img);
  };

  p5.setup = () => {
    p5.frameRate(25);
    let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    canvas.position(0, p5.windowHeight);
    canvas.style("z-index", "-1");
    p5.background(0);
  };
  p5.draw = () => {
    p5.frameRate(15);

    let mouse_x = p5.mouseX;
    let mouse_y = p5.mouseY;
    let y_margin = p5.windowHeight * 0.4;

    p5.background(0);

    if (
      p5.dist(p5.windowWidth * 0.5, p5.windowHeight * 0.5, mouse_x, mouse_y) <=
      250
    ) {
      cat.update();
    }
  };
}

export default sketch_about;
