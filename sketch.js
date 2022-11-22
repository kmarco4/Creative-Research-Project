//p5 reference code by sjnha

var r
var b;
function setup() { 
  createCanvas(width, height);
  r = color(200,0,0);
  b = color(0,0,200);
} 

function draw() { 
  var t = map(mouseX,0,width,0,1.0);
  var c = lerpColor(r,b,t);
  background(c);
}
