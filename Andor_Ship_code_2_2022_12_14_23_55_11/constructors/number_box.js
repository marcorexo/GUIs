function NumberBox(_width, _height, _box_height) {
  this.width      = _width;
  this.height     = _height;
  this.box_height = _box_height;
  this.margin = this.width/8;

  this.display = function () {
    stroke(141, 153, 93, 255);
    strokeWeight(6);
    fill(71, 91, 114, 255);
    rect(this.margin/2, height / 2 - this.box_height / 2, width - this.margin, this.box_height);
  };
}
