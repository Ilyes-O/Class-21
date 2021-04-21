var fixedRect1, fixedRect2, fixedRect3, fixedRect4,movingRect;


function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect1 = createSprite(250, 200, 100, 50);
  fixedRect1.shapeColor = "green"
  fixedRect1.debug = true;

  fixedRect2 = createSprite(450, 200, 100, 50);
  fixedRect2.shapeColor = "green"
  fixedRect2.velocityY = 5;
  fixedRect2.debug = true;

  fixedRect3 = createSprite(650, 200, 100, 50);
  fixedRect3.shapeColor = "green"
  fixedRect3.debug = true;
  fixedRect3.velocityY = 5;

}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(touchingSprites(movingRect,fixedRect1)){
    movingRect.shapeColor = "blue";
    fixedRect1.shapeColor = "blue";
  }else {
    movingRect.shapeColor = "green";
    fixedRect1.shapeColor = "green";
  }

  bouncingOff(movingRect, fixedRect3);
  drawSprites();
}

function touchingSprites(spriteObj1,spriteObject2){
  if(spriteObj1.x - spriteObject2.x <= spriteObject2.width/2 + spriteObj1.width/2 && spriteObject2.x - spriteObj1.x <= spriteObject2.width/2 + spriteObj1.width/2 && spriteObj1.y - spriteObject2.y <= spriteObject2.height/2 + spriteObj1.height/2 && spriteObject2.y - spriteObj1.y <= spriteObject2.height/2 + spriteObj1.height/2){
    return true;
  }else {
    return false;
  }
}

function bouncingOff(movingRect, fixedRect){
  
  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2  ){
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX *(-1);
  }
  if(movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
}
