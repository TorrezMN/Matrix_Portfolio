// Helper Classes

class Symbol {
  constructor(p5,speed, pos) {
    this.p5 = p5;
    this.pos = pos;
    this.value = String.fromCharCode(0x30A0 + this.p5.round(this.p5.random(0, 96)));
    this.is_first = false;
    this.speed = speed;


  }
  set_is_first(){
    this.is_first=true;
  }
  update() {
    if (this.pos.y >= 0) {
      this.pos.y -= this.speed;
      this.draw();
    } else {
      this.pos.y = this.p5.windowHeight+this.p5.random(0, 10) * -1;
    }

    this.value = String.fromCharCode(0x30A0 + this.p5.round(this.p5.random(0, 96)));
  }
  draw() {
    if(!this.is_first){
        this.p5.push();
    this.p5.fill(0, 255, 0);
    this.p5.textSize(14);
    this.p5.text(this.value, this.pos.x, this.pos.y);
    this.p5.pop();
    }else{
      this.p5.push();
      this.p5.fill(255);
      this.p5.textSize(14);
      this.p5.text(this.value, this.pos.x, this.pos.y);
      this.p5.pop();


    }

  }
}

class Stream{
  constructor(p5){
    this.p5 = p5;
    this.stream_size = Math.floor(p5.random(10,25));
    this.simbols = [];
    this.build_stream();

  }
  build_stream(){
    let stream_speed = Math.floor(this.p5.random(1,10));
    let x_pos = this.p5.random(config.width);
    let y_pos = this.p5.windowHeight+this.p5.random(config.height);
    for(let i of [...Array(this.stream_size).keys()]){
      this.simbols.push(
        new Symbol(
          this.p5, 
          stream_speed,
          this.p5.createVector(x_pos,y_pos)
        ));
      y_pos+=20;
    }
    
    if(this.simbols.length>0){
      if(!this.simbols.is_first){
         this.simbols[0].set_is_first();
      }      
    }
  }
  update(){
  
    for(let i of this.simbols){
      i.update();
    }

  }

}





// Sketch Config

var s=[];
var config;

function sketch_contact(p5) {

  p5.preload = () => {
  
    config = {
      'width': p5.windowWidth,
      'height': p5.windowHeight,
    }

    for(let i of [...Array(Math.floor(p5.random(20,50))).keys()]){
      s.push(new Stream(p5));
    }

  }


  p5.setup = () => {
    p5.frameRate(25);
    let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    canvas.position(0, p5.windowHeight*4);
    canvas.style('z-index', '-1')
    p5.background(0);


  }
  p5.draw = () => {
    p5.background(0);


    for (let i of s){
      i.update();
    }


  };
}


export default sketch_contact;
