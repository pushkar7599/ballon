var groundImage
var redballon , greenballon , blueballon , pinkballon 
var bowImage,bow
function preload(){
   //load your images here 
   groundImage = loadImage("background0.png")
   redballon  = loadImage("red_balloon0.png")
   greenballon = loadImage("green_balloon0.png")
   blueballon = loadImage("blue_balloon0.png")
   pinkballon = loadImage("pink_balloon0.png")
  bowImage = loadImage("bow0.png")
  }

function setup() {
  createCanvas(600, 600);

  ground = createSprite (600,300,300,300);
  ground.addImage("image of ground",groundImage);
  ground.scale = 2;
  ground.x = ground.width /2;
  ground.velocityX =-5;
  bow = createSprite(500,100,10,120);
  bow.addImage("image of bow",bowImage);
  bow.y=mouseY

  for (var i=60;i<390;i=i+60){
  ballon = createSprite (50,i,1,i);
 ballon.addImage("image of ballon",redballon);
  ballon.scale = 0.1;
}
  for (var i=70;i<390;i=i+70){
  ballon1 = createSprite (90,i,1,i);
 ballon1.addImage("image of ballon",greenballon);
  ballon1.scale = 0.1;
}
  for (var i=80;i<390;i=i+80){
  ballon2 = createSprite (120,i,1,i);
 ballon2.addImage("image of ballon",blueballon);
  ballon2.scale = 0.1;
}
  for (var i=80;i<390;i=i+80){
  ballon3 = createSprite (153,i,1,i);
 ballon3.addImage("image of ballon",pinkballon);
  ballon3.scale = 1;
}

}
function draw() {

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  bow.y=mouseY



     
  drawSprites();
}

