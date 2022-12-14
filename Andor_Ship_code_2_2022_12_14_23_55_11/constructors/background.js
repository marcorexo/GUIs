function Create_Background_Objects(_width, _height, _box_height,_font) {
  this.width = _width;
  this.height = _height;
  this.box_height = _box_height;
  this.font = _font;

  this.display = function () {
    fill(232, 194, 82, 255);
    noStroke();
    rect(this.width / 1.5, this.height / 1.8, 30, 30, 2);

    fill(71, 91, 114, 255);
    stroke(141, 153, 93, 255);
    strokeWeight(6);
    
    rect(
      20,
      this.height / 2 - self.box_height / 2,
      this.width - 40,
      self.box_height,
    );


    //yellow line
    stroke(232, 194, 82, 255);
    fill(232, 194, 82, 255);
    strokeWeight(3);
    line(0, height / 1.2, width, height / 1.2);

    push();
    translate(width / 4, height / 1.2);
    triangle(10, 10, 20, -10, 30, 10);
    pop();
    
    push();
    translate(width/2.2,height/1.23)
    beginShape();
    vertex(0,0);
    vertex(0,-height/8);
    vertex(width/10, -height/6);
    vertex(width/10,0);
    vertex(0,0);
    endShape();
    pop();

    rect(width - 30, height / 4, 30, 30, 2);
    rect(width - 30, height / 2.8, 30, 30, 2); 
    
    textSize(20);
    //textFont(this.font);
    text('33-9', width/2.7, height/1.05);
  };
}
