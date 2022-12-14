let angle = 0;
let r = 150;
let _total = 150;
let _theta = 0;
let _dish;

function setup() {
    var canvas_left = createCanvas(600, 400, WEBGL);
    fill('white');
    noFill();
    _dish = new Dish(r);
    angleMode(DEGREES);
}

function draw() {
  background(0);

  //create a spherical ball using points
  
  //orbitControl();
  strokeWeight(2);
  rotateY(_theta);
  
  push();
  rotateX(90);
  
  for(let x=0; x<_total; x+=5){
    let lon = map(x, 0, _total, -180, 180);
    for(let y=0; y<_total; y+=10){
      let lat = map(y, 0, _total, -90, 90);
      let _x = r * sin(lon) * cos(lat);
      let _y = r * sin(lon) * sin(lat);
      let _z = r * cos(lon);
      stroke(255)
      point(_x, _y, _z);
    }
  }

  //strokeWeight(4);
  circle(0, 0,  300);
  pop();
  
  _dish.display();
  
  _theta += 0.5;
}