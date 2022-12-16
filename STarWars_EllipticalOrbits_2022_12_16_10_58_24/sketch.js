let x, y, _theta;
let lst_ellipses = [];
let _planet;
let _colours = [];

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
  
  _theta = 1;
  
  button = createButton('Press Me!');
  button.position(0, 0);
  button.mousePressed(setup);
  
  
  //create two ellipse colours
  _colours[0] = color('red');
  _colours[1] = color('green');
  
  //create a new planet
  _planet = new Planet(width/2, height/2, width/20);
  
  //create a list of ellipses
  for(var i=0; i<4; i++){
    //_x, _y, _theta, _major, _minor, _color
    lst_ellipses[i] = new Ellipse(width/2, height/2, random(-45, 45), random(200, 400), random(50, 100), _colours[int( random(0, 2) )]);
  }
}

function draw() {
  background(0);
  for(var i=0; i<lst_ellipses.length; i++){
    lst_ellipses[i].display();
    lst_ellipses[i].update(); //moves the small planets around the ellipsse
  }
  _planet.dispay();
}