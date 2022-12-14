let _AurebeshFont;
let _code_numbers = ['1', '2', '9', '1','2','5', '0', '5'];
let _lst_letters = [];
let _background_objects;
let _number_box;

function preload() {
  _AurebeshFont = loadFont('assets/AurebeshAfCanon-K7Ope.otf');
}

function setup() {
  //frameRate(1);
  createCanvas(600, 400);
  _background_objects = new Create_Background_Objects(width, height, 50);
  _number_box = new NumberBox(width, height, 50);
  
  //create and display array400mbers
  for(var i=0; i < _code_numbers.length; i++){
    let n = _code_numbers[i];
    _lst_letters[i] = new Aurebesh_Letter(n, i*40+50, height/1.9, width, _AurebeshFont);
  }
}


function draw(){
  drawingContext.shadowColor = color('black');
  drawingContext.shadowBlur = 0;
  background(65,106,114,255);
  
  _background_objects.display();
  _number_box.display();
  
  drawingContext.shadowColor = color('lightblue');
  drawingContext.shadowBlur = 12;
  for(var i=0; i < _lst_letters.length; i++){
    _lst_letters[i].display();
  }
}