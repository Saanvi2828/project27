var rope
var ball1,ball2,ball3,ball4,ball5
var roof
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,25,750,50);
	ball1=new Ball(200,700,20);

	rope=new Rope(ball1.body,roof.body,-40,0);
	//Engine.run(engine);
  
}


function draw() {
	background(255);

Engine.update(engine);
  roof.display();
  ball1.display();
  
  rectMode(CENTER);
  
  drawSprites();
 
}



