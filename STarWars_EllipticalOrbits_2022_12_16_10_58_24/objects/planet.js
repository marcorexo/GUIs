function Planet(_x, _y, _rad){
  this.x = _x;
  this.y = _y;
  this.rad = _rad;
  
  this.dispay = function(){
    stroke('red');
    noFill();
    circle(this.x, this.y, this.rad);
    fill('red');
    rectMode(CENTER);
    push();
    translate(-this.rad/10, -this.rad/3)
    rect(this.x, this.y, this.rad/10, this.rad/10);
    pop();
    push();
    translate(this.rad/10, this.rad/3)
    rect(this.x, this.y, this.rad/10, this.rad/10);
    pop();
  }
}