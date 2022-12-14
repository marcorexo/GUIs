
function Aurebesh_Letter(_character, _x, _y, _width, _font){
  this.x = _x;
  this.y = _y;
  this.character = _character;
  this.spacer = 1.5;
  this.font = _font;
  
  this.display = function(){
    fill('lightblue');
    noStroke();
    textSize(36);
    textFont(this.font);
    text(this.character, this.x*this.spacer, this.y);
  }
}