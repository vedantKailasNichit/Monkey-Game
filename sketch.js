var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var survivalTime = 0;

function preload(){
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500, 400);
  monkey = createSprite(50,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground = createSprite(18,350,900,10);
  ground.velocityX= -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  FoodGroup = createGroup();
}


function draw() {
  background(255);
  
  if(ground.x<40){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space") && monkey.y >=230){
    monkey.velocityY = -12;    
  }
  monkey.velocityY = monkey.velocityY + 0.8;
    
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score,150,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival time: " + survivalTime,150,50);
  
  food();
  
  obstacle();
  
  drawSprites();  
}

function food(){
  if(frameCount % 80 === 0){
    var rand = Math.round(random(120,200));
    var banana = createSprite(500,rand,10,10);
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 130;
    
    FoodGroup.add(banana);
  }
}



function obstacle(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(500,325,10,10);
    obstacle.addImage("obsatcle",obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4;
    obstacle.lifetime = 130;
  }
}



