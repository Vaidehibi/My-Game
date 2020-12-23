// You can find all animations in  the animation tab 
var backround = createSprite(0,0,400,400);
backround.setAnimation("sun");
backround.velocityX=-2 ;
backround.x= backround.width/2;
backround.scale= 2;

var score= 0;
textSize(20);


var bow= createSprite(380,200);
bow.setAnimation("bow");

var arrowGroup= createGroup();
var redGroup= createGroup();
var blueGroup= createGroup();
var greenGroup= createGroup();
var yellowGroup= createGroup();

function draw() {
  
  background("sun");
  //background.setAnimation("sun");
  bow.y= World.mouseY;
  
  createEdgeSprites();
  
  bow.collide(rightEdge);
  
  if(backround.x<0){
    backround.x= backround.width/2;
  }
  if(keyDown("space")){
  arrow();
  //playSound("sound://category_pop/puzzle_game_affirmation_positive_ui_button_1.mp3");
  }
  if (arrowGroup.isTouching(redGroup)){
    redGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+4;
  }
  if (arrowGroup.isTouching(blueGroup)){
    blueGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
  }
  if (arrowGroup.isTouching(greenGroup)){
    greenGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  if (arrowGroup.isTouching(yellowGroup)){
    yellowGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }
  var rand= randomNumber(1,4);
  if(frameCount % 80 === 0){
    if(rand===1){
     redBalloons();
    }
    else if(rand===2){
      blueBalloons();
    }
    else if(rand===3){
      greenBalloons();
    }
    else {
      yellowBalloons();
    }
   
  }  
  
  drawSprites();
  stroke("black");
  text("Score:"+score,250,30);
}

function arrow(){
  
  var arrow1= createSprite(350,200,10,10);
  arrow1.setAnimation("arrow");
   arrow1.velocityX= -4;
   arrow1.y=bow.y;
   arrow.lifetime= 100;
   arrowGroup.add(arrow1);
}
function redBalloons(){
  var redballoons= createSprite(random(50,380),random(50,380),10,10);
  redballoons.velocityY= 3;
  redballoons.setAnimation("red");
  redballoons.lifetime= 150;
  redGroup.add(redballoons);
}
function blueBalloons(){
  var blueballoons= createSprite(random(50,380),random(50,380),10,10);
  blueballoons.velocityY= 3;
  blueballoons.setAnimation("blue");
  blueballoons.lifetime= 150;
  blueGroup.add(blueballoons);
}
function greenBalloons(){
  var greenballoons= createSprite(random(50,380),random(50,380),10,10);
  greenballoons.velocityY= 3;
  greenballoons.setAnimation("green");
  greenballoons.lifetime= 150;
  greenGroup.add(greenballoons);
}
function yellowBalloons(){
  var yellowballoons= createSprite(random(50,380),random(50,380),10,10);
  yellowballoons.velocityY= 3;
  yellowballoons.setAnimation("yellow");
  yellowballoons.lifetime= 150;
  yellowGroup.add(yellowballoons);
}

