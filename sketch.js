var gameObject1,movingrect,gameObject2,gameObject3,gameObject;
function setup() {
  createCanvas(1200,800);
  gameObject1=createSprite(100, 100, 50, 50);
  gameObject1.shapeColor="green"; 
  gameObject2=createSprite(300, 100, 50, 50);
  gameObject2.shapeColor="green";
  gameObject3=createSprite(500, 100, 50, 50);
  gameObject3.shapeColor="green";
  gameObject4=createSprite(700, 100, 50, 50);
  gameObject4.shapeColor="green";
  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor="green";
}

function draw() {
  background(0,0,0); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(isTouching(movingrect,gameObject1)) {
    movingrect.shapeColor="red";
    gameObject1.shapeColor="red";
  }
  else{
    movingrect.shapeColor="green";
    gameObject1.shapeColor="green";
  }
  if(isTouching(movingrect,gameObject2)) {
    movingrect.shapeColor="red";
    gameObject2.shapeColor="red";
  }
  else{
    movingrect.shapeColor="green";
    gameObject2.shapeColor="green";
  }
  if(isTouching(movingrect,gameObject3)) {
    movingrect.shapeColor="red";
    gameObject3.shapeColor="red";
  }
  else{
    movingrect.shapeColor="green";
    gameObject3.shapeColor="green";
  }
  if(isTouching(movingrect,gameObject4)) {
    movingrect.shapeColor="red";
    gameObject4.shapeColor="red";
  }
  else{
    movingrect.shapeColor="green";
    gameObject4.shapeColor="green";
  }
  drawSprites();
}
