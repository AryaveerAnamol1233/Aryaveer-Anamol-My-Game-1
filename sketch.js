var bg,bgImg
var ninja,ninjaImg
function setup() {
  createCanvas(1200,600);
 bg=createSprite(600,300, 1200, 800);
 bg.addImage(bgImg);
 bg.scale=0.85;
 bg.velocityX=-4

 ninja=createSprite(600,500)
ninja.addAnimation("player",ninjaImg);
}

function preload(){
ninjaImg=loadAnimation("images/ninja-1.png","images/ninja-2.png","images/ninja-3.png","images/ninja-4.png","images/ninja-5.png","images/ninja-6.png","images/ninja-7.png","images/ninja-8.png","images/ninja-9.png","images/ninja-10.png")
bgImg=loadImage("images/jungle.jpg")
}






function draw() {
  background(255,255,255);  
  if(bg.x<500){
    bg.x=700
  }
  drawSprites();
}