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