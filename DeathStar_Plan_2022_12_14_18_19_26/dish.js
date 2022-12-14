function Dish(_death_star_size){
  this.d = _death_star_size/2;
  //this.radius = 150;
  
  this.display = function(){
    stroke('white');
    strokeWeight(1);
    push();
    translate(0,-this.d/1.5, 1.8*this.d);
    rotateX(asin(this.d/1.5/(2*this.d)));  //--> (this.d/2)/150
    circle(0, 0, this.d);
    
    for(let _theta=1; _theta<360; _theta +=24){
      let _x1 = this.d/2 * cos(_theta);
      let _y1 = this.d/2 * sin(_theta);
      let _x2 = this.d/2/2 * cos(_theta);
      let _y2 = this.d/2/2 * sin(_theta);
      let v = createVector(_x2 - _x1, _y2 - _y1);
      line(_x1, _y1, 0, _x2, _y2, -10);
  }
    
    pop();
  }
}