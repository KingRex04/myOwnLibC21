var fixedRect,movingRect;
var gameobject1, gameobject2,gameobject3,gameobject4;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = 5;
  fixedRect.debug = true;
  movingRect = createSprite(700, 200, 30, 80);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;
  movingRect.velocityX = -5;

  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor ="red";
  gameobject2 = createSprite(200,100,50,50);
  gameobject2.shapeColor ="red";
  gameobject3 = createSprite(300,100,50,50);
  gameobject3.shapeColor ="red";
  gameobject4 = createSprite(400,100,50,50);
  gameobject4.shapeColor ="red";
}

function draw() {
  background(255,255,255);  
 
 /* movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;*/
 
  

  /*if(isTouching(movingRect,gameobject1)){
    gameobject1.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else{
    gameobject1.shapeColor = "green";
    movingRect.shapeColor = "yellow";
  }*/

  bounceOff(movingRect,fixedRect);


  drawSprites();
}

function bounceOff(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2){
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
  if(object1.y - object2.y < object1.height/2 + object2.height/2 
    && object2.y - object1.y < object1.height/2 + object2.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  }

}
