
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var obstacle;
var ground
var survivalTime=0;
var backGround;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
   
}



function setup() {
   createCanvas(600,400);
  
   
  monkey=createSprite(80,315,20,20) ;
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
   ground.x=ground.width/2;
  console.log(ground.x);
  
   
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
}


function draw() {
  background(" lightblue ");
  
  if(ground.x<300){
    ground.x=ground.width/2
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  
  // add gravity
  monkey.velocityY =monkey.velocityY + 0.8;
  monkey.collide(ground);
  
 // call banana and obstacle function  
 banana() ;
 obstacle();
  
   stroke("black") ;
  fill("black");
  textSize(20);
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time="+survivalTime,100,50 )
  drawSprites();
  
  
}

 function banana(){
   if(World.frameCount%80===0){
    var banana=createSprite(510,130,20,20);
     banana.scale=0.1;
       banana.y=Math.round(random(120,200));
     banana.addImage(bananaImage);
     banana.velocityX=-7;
     banana.setLifetime=180;
     bananaGroup.add(banana);
   }
 }
 
function obstacle(){
 if(World.frameCount%300===0) {
  var obstacle=createSprite(510,310,20,20);
   obstacle.scale=0.2;
   obstacle.velocityX=-7;
   obstacle.addImage(obstacleImage);
   obstacle.lifetime=300;
   obstacleGroup.add(obstacle);
 }
}




