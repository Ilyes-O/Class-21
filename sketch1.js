v850ar fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(100, 100, 50, 50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = 5;

  fixedRect = createSprite(100, 400, 100, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = -5;

}

function draw() {
  background(0);  
  

  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2  ){
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }

  if(movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  
  
  drawSprites();
}