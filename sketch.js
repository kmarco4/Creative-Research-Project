function setup() {
  createCanvas(400, 400); 
  stroke ('orange');
  v1 = createVector(width/2,height/2);

}

function draw() {
  background(220);
  fill('purple')
  ellipse(v1.x, v1.y, mouseX, mouseY);
}
