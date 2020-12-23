//FRUIT NINJA
var PLAY=1;
var END=0;
//var gameState=1;

var score=0;
var fruitGroup= createGroup();
var enemyGroup= createGroup();


var sword= createSprite(200,200,10,10);
sword.setAnimation("sword");

function draw() {
 background("brown");
 textSize(20);
 text("score:"+score,250,30);
 
 if(gameState===PLAY){
  fruits();
  monsters();
   sword.y=World.mouseY;
   sword.x=World.mouseX;
 
 if(fruitGroup.isTouching(sword)){
   fruitGroup.destroyEach();
   score=score+2;
   //playSound("sound://category_hits/puzzle_game_button_01.mp3");
 }
 

 
 else{
   
  if(enemyGroup.isTouching(sword)){
   gameState=END;
   sword.x=200;
   sword.y=200;
   fruitGroup.destroyEach();
   enemyGroup.destroyEach();
   sword.setAnimation("GameOver");
   fruitGroup.setVelocityXEach(0);
   enemyGroup.setVelocityXEach(0);
   //playSound("sound://category_accent/puzzle_game_accent_b_02.mp3");
 }
 }
}


  drawSprites();
}

 function monsters(){
   if(World.frameCount%200===0){
     var monster= createSprite(50,50,20,20);
   monster.setAnimation("alien");
   monster.y=randomNumber(100,300);
   monster.velocityX=(7+(score/10));
   monster.lifetime= 60;
   enemyGroup.add(monster);
   }
   }
function fruits(){
    if(World.frameCount%100===0){
     var position= randomNumber(1,4) ;
    var fruit= createSprite(400,200,10,10);
    if(position===1){
      fruit.x=400;
      fruit.velocityX= -(7+(score/4));
    }
    else{
      if(position===2){
        fruit.x=0;
        fruit.velocityX= (7+(score/4));
      }
      if(position===3){
        fruit.y=400;
        fruit.x=100;
        fruit.velocityY= -(7+(score/4));
      }
      if(position===4){
        fruit.x=300;
        fruit.y=0;
        fruit.velocityY= (7+(score/4));
      }
    }
    var rand= randomNumber(1,4);
    fruit.setAnimation("fruit"+rand);
    fruit.scale=0.2;
    fruitGroup.add(fruit);
    }
}