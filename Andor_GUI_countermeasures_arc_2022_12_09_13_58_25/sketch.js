

let arc_width = 290;

let _rad = 0;
let _rad2 = 0;
let _inc = 0;
let _inc2= 0;

let _counting = true

var foo = new p5.Speech(); // speech synthesis object

function setup() {
    createCanvas(400, 400);
    strokeCap(SQUARE);
    textStyle(NORMAL);
    textSize(10);
}
  
function draw() {
    background(0);
  
    stroke('#FF9800');
    strokeWeight(5);
    line(width/2,height/2, width/2,341);
    line(width/2,330, width/2+10,330);
  
    noStroke();
    fill(100);
    arc(width/2, height/2, arc_width, arc_width, PI/2, -HALF_PI); 
  
    //draw green arc
    fill(0,250,0);
    arc(width/2, height/2, arc_width, arc_width, PI/2, PI/2 + _inc); 
    fill(0,255,0,100);
  
    if(_counting){
      _rad += 0.25;
      _inc = map(_rad,0,100,0,PI,true);
      //if(_rad > 50) _rad = 0;
    }

  
 
    if(_rad > 50){
      //draw orange arc
      if(_rad2 > 100){
        fill('red');
        _counting = false;
      }
      else{
        fill('orange');
      }
      
      arc(width/2, height/2, arc_width, arc_width, PI/2, PI/2 + _inc2); 
      _rad2+=0.25;
      _inc2 = map(_rad2,0,100,0,PI,true);
    }
  
    //draw both circle outlines
    stroke('rgb(37,37,37)');
 
    noFill();
    arc(width/2, height/2, 150, 150, PI/2, -HALF_PI); 
    arc(width/2, height/2, 250, 250, PI/2, -HALF_PI); 
  
    fill(255,255,255);
    noStroke();
    circle(width/2,height/2,70);
  
  
  
    draw_RHS();
  
   
}

function draw_RHS(){
  
  stroke(0);
  let _val = int(map(_rad, 0, 150, 0, 1000));
  text(_val, width/1.5, height/2);
  
  if(_counting) stroke(255);
  else stroke(255, 0,0);
  
  line(width/2+50,100, width/2+50, 80);
  line(width/2+48,82, width/2+80, 82);
  line(width/2+78,82, width/2+78, 155);
  
  //line(width/2-50,100, width/2-50, 80);
  //line(width/2-48,82, width/2-80, 82);
  //line(width/2-78,82, width/2-78, 155);
  

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}