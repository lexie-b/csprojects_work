


function setup() {
  createCanvas(400, 400);
    background(0);
}

let bx = 200;
let v = 4;
let by = 0;
let x = random(0, width);
let y = random(0,height);


function draw() {


  rect(x, y, 60, 17);

  ellipse(bx, by, 20, 20);

  if(by+20<y&&by-20>y)
  {
    v*-1;
  }
  if (x > width+50)
  {
    x = -50;
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
