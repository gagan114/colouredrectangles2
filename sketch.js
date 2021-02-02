var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if(isTouching()){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
    text("Touched", 300,400);
    textSize(30);
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";


  }

  isTouching();
  drawSprites();
}
  
  

