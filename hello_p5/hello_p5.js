


function setup() {
  createCanvas(400, 400);
}

let x = 10;

function draw() {
  background(0);
  if(x>=10)
  {
    background(0);
    text("hi");
  }

  /*
  fill(255, 0, 0);
  ellipse(x, 200, 100, 50);
  x++;

  if (x > width+50)
    x = -50;*/
}

function mousePressed()
{
  fill(random(256), random(256), random(256));
  ellipse(mouseX, mouseY, 20, 20);
  x++;

}
