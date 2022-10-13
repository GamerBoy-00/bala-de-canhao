const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var position = [];
var engine;
var world;
var musica
var tower,backgroundImg,background,cannon,angle,ball,boat;
var balls = [];
var boats = [];
var boatAnimation = [];
var boatSpriteData,boatSpriteSheet;
var boatFrames
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
 boatSpriteData = loadJSON("assets/boat/boat.json");
 boatSpriteSheet = loadImage("assets/boat/boat.png")

}


function setup() {
  canvas = createCanvas(1200,600);
  //var valores = [1,2,3];
  //console.log(valores[0])
  engine = Engine.create();
  world = engine.world;
  angle = -PI/4;
  tower = new Tower(150,350,160,310);
  cannon = new Cannon(180,110,100,50,angle);
  boatFrames = boatSpriteData.frames;
  for(var i=0; i<boatFrames.length; i++){
var pos = boatFrames[i].position;
var img = boatSpriteSheet.get(pos.x,pos.y,pos.w,pos.h);
boatAnimation.push(img);
  }
boat = new Boat(width,height-100,200,200,-100,boatAnimation);
  rectMode(CENTER);
  ellipseMode(RADIUS);
 


  //Use a palavra-chave new para criar um objeto torre. (Desafio 4)
 
}


function draw() 
{
  
  background(189);
  
  image(backgroundImg, 0, 0, width, height);
  tower.display();
  boat.showBoats();
  Body.setVelocity(boat.body,{x:-0.9,y:0})
  cannon.display();
 // ball.display();
  Engine.update(engine);
//exibir a torre (Desafio 4)
 
for(var i=0; i<balls.length;i++){

  showball(balls[i],i);
  boats[i].animate();
}


}

function keyReleased(){

if (keyCode == DOWN_ARROW) {
  //ball.shoot();
  balls[balls.length - 1].shoot();
}

}

function keyPressed(){

  if (keyCode == DOWN_ARROW) {
    ball = new Ball(cannon.x,cannon.y);
    balls.push(ball);


  }

}

function showball(B,index){

B.display();

if (B.body.position.x > width || B.body.y > height) {
  World.remove(world,B.body);
  balls.splice(index,1);
}

}



