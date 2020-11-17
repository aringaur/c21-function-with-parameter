var movingrect,fixedrect;
var gameobject1,gameobject2,gameobject3;

function setup() {
  createCanvas(1200,400);
  movingrect = createSprite(200, 200, 50, 100);
  fixedrect = createSprite(400,200,80,100);

  gameobject1 = createSprite(130, 240,50,50);
  gameobject1.shapeColor = "yellow";
  gameobject2 = createSprite(260, 300,50,50);
  gameobject2.shapeColor = "orange";
  gameobject3 = createSprite(100, 130,50,50);
  gameobject3.shapeColor = "purple";

  movingrect.debug = true;
  fixedrect.debug = true;

}

function draw() { 
  background("black");  

  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if(isTouching(fixedrect,movingrect))
  {
    fixedrect .shapeColor = "red";
    movingrect.shapeColor = "red";

 }

else{

  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";

}

  
  

  drawSprites();
}


