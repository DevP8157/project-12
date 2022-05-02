var pathImg, path;
var Runner;
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  RunnerImg = loadAnimation("Runner-1.png", "Runner-2.png");
}


function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,400,50,50);
  path.addImage("path", pathImg);
  path.velocityY = 4;
  path.scale =1.2;
  Runner = createSprite(200,370);
  Runner.addAnimation("Runner", RunnerImg);
  Runner.scale = 0.05
}

function draw() {
  background(0);
  drawSprites();
}
