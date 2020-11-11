
var hrAngle, secAngle, minAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0); 

  translate(200,200);
  rotate(-90);
  var hr = hour();
  var min = minute();
  var sec = second();

  noFill();
  stroke("red");
  secAngle = map(sec, 0, 60, 0, 360 );
  strokeWeight(4);
  arc(0,0,275,225,0,secAngle);
  
  stroke("blue");
  hrAngle = map(hr, 0, 24, 0, 360);
  strokeWeight(8);
  arc(0,0,250,200,0,hrAngle);

  stroke("green");
  minAngle = map(min, 0, 60, 0, 360);
  strokeWeight(6);
  arc(0,0,225,175,0,minAngle);

  push();
  rotate(secAngle);
  stroke("red");
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("blue");
  line(0,0,75,0);
  pop();

  push();
  rotate(minAngle);
  stroke("green");
  line(0,0,50,0);
  pop();
  
  stroke("black");
  point(0,0);

  drawSprites();
}