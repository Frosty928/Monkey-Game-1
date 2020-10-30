
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  monkey=createSprite(120,300,20,20)
  monkey.addAnimation("running", monkey_running)
  monkey.scale=0.1

  
  ground=createSprite(300,400,1200,140)
  ground.velocityX=-8
  console.log(monkey.y)
}


function draw() {
  if (ground.x<0) {
    ground.x=ground.width/2
  }
  background(150)

  if(keyWentDown("space")&& monkey.y >= 299) {
        monkey.velocityY = -12;
}
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  
if (frameCount % 80 === 0){
  banana=createSprite(600,165,10,40)
  banana.y = Math.round(random(300,200));
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-5
  banana.lifetime=130
}
  
  if (frameCount % 300 === 0){
    obstacle=createSprite(600,300,20,20)
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2
    obstacle.velocityX=-8
  }
  
  stroke("white")
  textSize(20)
  fill("black")
  text("score: "+ score, 500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50)
  
  drawSprites();

}

