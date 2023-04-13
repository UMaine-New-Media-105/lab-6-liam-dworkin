let spriteY = 50;
let spriteX = 50;



function setup() {
  createCanvas(500, 500);
  //moved the variables around to get the coin to appear
  //having trouble forcing interaction
  //this is actually better than it was
  
   X1 = random(20, 450);
   X2 = random(20, 450); 
   X3 = random(20, 450);
   X4 = random(20, 450); 
   X5 = random(20, 450);
  
}

function draw() {
  background("navy");
  
  yeetBall(spriteX, spriteY,1);
  
  //at least 5 random coins appear now
  
  coin(X1, X1, 1);
  
  coin(X2, X2, 1);
  
  coin(X3, X3, 1);
  
  coin(X4, X4, 1);
  
  coin(X5, X5, 1);
  
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    spriteY -= 15;
  }
  if (keyCode == DOWN_ARROW) {
    spriteY += 15;
  }
  if (keyCode == LEFT_ARROW) {
    spriteX -= 15;
  }
  if (keyCode == RIGHT_ARROW) {
    spriteX += 15;
  }
}

function yeetBall(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  noStroke();
  translate(0, 0);
  fill("hsla(50, 45%, 75%, .7)");
  ellipse(0, 0, 91, 96);
  fill("hsla(100, 45%, 75%, .7)");
  ellipse(0, 0, 80, 85);
  fill("hsla(230, 45%, 75%, .7)");
  ellipse(0, 0, 63, 64);
  fill("hsla(230, 45%, 75%, .7)");
  ellipse(0, 0, 45, 47);
  fill("purple");
  textSize(25);
  noStroke();
  text("( ^-^ )", -31, -4);
  fill("salmon");
  textSize(20);
  text("◍   ◍", -25, 0);
  pop();
}

function coin(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  noStroke();
  translate(0, 0);
  fill("orange");
  ellipse(0, 0, 50);
  fill("yellow");
  ellipse(0, 0, 45);
  fill("palegoldenrod");
  ellipse(0, 0, 35);
  fill("gold");
  ellipse(0, 0, 25);
  
 // if (coinIsSafe === false) { 
   // noFill(); 
   // noStroke();
 // }
  pop();
  
  
}
