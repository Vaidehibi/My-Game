//main game vars

var button1, button2, button3, button4, button5, tree1, tree2, tree3, tree4;
var computerPaddle, computerScore, userPaddle, userScore, ball, edges,canvas;
var Levels= "Level1";
 
//PONG GAME
var pongLevel= "serve";


//fruit game vars
var PLAY1,END1,score1,gameState1,fruitGroup,enemyGroup,sword;

//trex game vars
var PLAY2, END2, gameState2, trex, ground, invisibleGround;
var ObstaclesGroup, CloudsGroup, gameOver, restart, count;
 
//BALLOON BUSTER
var backround, score2, bow, arrowGroup, redGroup, blueGroup, greenGroup, yellowGroup;

backround = createSprite(0,0,400,400);
backround.visible= false;

bow= createSprite(380,200);
bow. visible= false;

arrowGroup= new Group();
redGroup= new Group();
blueGroup= new Group();
greenGroup= new Group();
yellowGroup= new Group(); 

function setup(){

  canvas=createCanvas(400,400)

  //sprites of main game
  button1= createSprite(300,200,40,10);
  button1.visible= true;

 button2= createSprite(200, 150, 10, 40);
button2.visible= false;

 button3= createSprite(50,50,50,10);
button3.visible= false;

button4= createSprite(250, 40, 80, 20);
button4.visible= false;

button5= createSprite(150, 70, 50, 60);
button5.visible= false;


 tree1= createSprite(200,100,30, 50);
tree1.visible= false;

tree2= createSprite(350, 300, 30, 50);
tree2.visible= false;

tree3= createSprite(150, 200, 30, 50);
tree3.visible= false;
 
tree4= createSprite(275, 275, 30, 50);
tree4.visible= false;

//ponggame
userPaddle = createSprite(390,200,10,70);
userPaddle.visible= false;
userPaddle.setAnimation("player");

computerPaddle = createSprite(10,200,10,70);
computerPaddle.visible= false;
computerPaddle.setAnimation("robot");

ball = createSprite(200,200,12,12);
ball.visible= false;
ball.setAnimation("ball");

computerScore = 0;
 playerScore = 0;
 edges= createEdgesSprites;


 //sprites of fruit game

PLAY=1;
END=0;
gameState=1;

score2=0;
fruitGroup= new Group();
enemyGroup= new Group();

sword= createSprite(200,200,10,10);
sword.visible=false;
}
//sprites of trex game

PLAY1= 1;
END1= 0;
gamestate1= PLAY1;

score3= 0;
CloudsGroup= new Group();
ObstaclesGroup= new Group();

trex = createSprite(200,380,20,50);
trex.visible= false;

ground = createSprite(200,380,400,20);
ground.visible= false;

invisibleGround = createSprite(200,385,400,5);
invisibleGround.visible = false;

gameOver = createSprite(200,300);
gameOver.visible = false;

restart = createSprite(200,340);
restart.visible = false;

function draw() {
  background("lightGreen");
  
    if(mousePressedOver(button1)){
      Levels= "Level2";
    }
    
    if(Levels=== "Level2"){
      background("white");
      button1.visible= false;
      tree1. visible= true;
      tree2. visible= true;
      
      if(mousePressedOver(tree1)){
        Levels= "Level3";
      
      }
    }

    if(Levels= "Level3"){
      
      background("green");
      
    
      button2.visible= true;
      tree1.visible= false;
      tree2.visible= false;

      if(mousePressedOver(button2)){
        Levels= "ponggame";
      }
    
  if(Levels=== "ponggame"){
    background("lightPurple");

    //to go back to the level before
    button3.visible= true;

    button2.visible= false;

    userPaddle.visible= true;
    computerPaddle.visible= true;
    ball.visible= true;
  }
    //display Scores
  text(computerScore,170,20);
  text(playerScore, 230,20);
  
  //draw dotted lines
  for (var i = 0; i < 400; i+=20) {
     line(200,i,200,i+10);
  }

  //make the userPaddle move with the mouse
  userPaddle.y = World.mouseY;
  
  if (pongLevel=== "serve") {
    text("Press Space to Serve",150,180);
  } 
  
  if (keyDown("space") && pongLevel == "serve") {
    ball.velocityX = 5;
    ball.velocityY = 5;
    pongLevel = "play";
  }
  
 
  if (pongLevel === "over") {
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }
  
  if (keyDown("r")) {
    pongLevel = "serve";
    computerScore = 0;
    playerScore = 0;
  }
  

  //make the ball bounce off the user paddle
  if(ball.isTouching(userPaddle)){
    ball.x = ball.x - 5;
    ball.velocityX = -ball.velocityX;
  }
  
  //make the ball bounce off the computer paddle
  if(ball.isTouching(computerPaddle)){
    ball.x = ball.x + 5;
    ball.velocityX = -ball.velocityX;
  }
  
  //place the ball back in the centre if it crosses the screen
  if(ball.x > 400 || ball.x < 0){
    
    if (ball.x < 0) {
      playerScore++;
    }
    else {
      computerScore++;
    }
      
    ball.x = 200;
    ball.y = 200;
    ball.velocityX = 0;
    ball.velocityY = 0;
    pongLevel="serve";
    
    if (computerScore=== 5 || playerScore === 5){
      pongLevel = "over";
    }
  }
  

  createEdgeSprites();
    //make the ball bounce off the top and bottom walls
  if (ball.isTouching(topEdge) || ball.isTouching(bottomEdge)) {
    ball.bounceOff(topEdge);
    ball.bounceOff(bottomEdge);
  }
  
  //add AI to the computer paddle so that it always hits the ball
  computerPaddle.y = ball.y;


  if(mousePressedOver(button3)){
    gameState= "Level2";
    button3.visible= false;
    ball.visible= false;
    computerPaddle.visible= false;
    userPaddle.visible= false;
  
  }
  drawSprites();
 }
}
