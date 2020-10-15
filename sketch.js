var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

 var  dog, happyDog, database, foodS, foodStock;

function preload()
{

}

function setup() {
	createCanvas(800, 700);
   engine = Engine.create();
  world = engine.world;
}


function draw() {  

  drawSprites();

}



