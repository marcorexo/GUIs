function Ellipse(_x, _y, _rot, _major, _minor, _color){
  this.x = _x;
  this.y = _y;
  this.color = _color;
  this.rot = _rot;
  this.major = _major;
  this.minor = _minor;
  this.theta = 1;
  this.buffer = random(0, 50);
  this.x_buffer = random(-1, 1);
  this.y_buffer = random(-1, 1);
  
  this.display = function(){
    stroke(_color);
    noFill();
    
    push();
    translate(this.x+(this.buffer*this.x_buffer), this.y+(this.buffer/2 * this.y_buffer));
    rotate(this.rot);
    ellipse(0, 0, this.major, this.minor);

    //point on an ellipse
    var x = this.major/2 * cos(this.theta);
    var y = this.minor/2 * sin(this.theta);
    ellipse(x, y, 5, 5);
    pop();

  }
  
  this.update = function(){
    this.theta +=1;
  
    if(this.theta > 360) this.theta = 1;
  }
}