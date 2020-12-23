
class PongGame{
  constructor(){

  }
}
    
  if(gameState=== "ponggame"){
    background("lightPurple");
    button3.visible= true;
    button2.visible= false;
    userPaddle.visible= true;
    computerPaddle.visible= true;
    ball.visible= true;

  //display Scores
  text(computerScore,170,20);
  text(playerScore, 230,20);
  
  //draw dotted lines
  for (var i = 0; i < 400; i+=20) {
     line(200,i,200,i+10);
  }
  
  if (Levels === "serve") {
    text("Press Space to Serve",150,180);
  } 
  
  if (Levels === "over") {
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }
  
  if (keyDown("r")) {
    Levels = "serve";
    computerScore = 0;
    playerScore = 0;
  }
  
  
  //give velocity to the ball when the user presses play
  //assign random velocities later for fun
  if (keyDown("space") && Levels == "serve") {
    ball.velocityX = 5;
    ball.velocityY = 5;
    Levels = "play";
  }
  
  //make the userPaddle move with the mouse
  userPaddle.y = World.mouseY;
  
  
  
  //make the ball bounce off the user paddle
  if(ball.isTouching(userPaddle)){
    playSound("hit.mp3");
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
    Levels = "serve";
    
    if (computerScore=== 5 || playerScore === 5){
      Levels = "over";
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


