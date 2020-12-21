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
	ball1=new Ball(width/2-80,700,20);
	ball2=new Ball(width/2-40,700,20);
	ball3=new Ball(width/2,700,20);
	ball4=new Ball(width/2+40,700,20);
	ball5=new Ball(width/2+80,700,20);

	rope=new Rope(ball1.body,{x:width/2-80,y:50});
	rope1=new Rope(ball2.body,{x:width/2-40,y:50});
	rope2=new Rope(ball3.body,{x:width/2,y:50});
	rope3=new Rope(ball4.body,{x:width/2+40,y:50});
	rope4=new Rope(ball5.body,{x:width/2+80,y:50});
	//Engine.run(engine);
  
}


function draw() {
	background(255);

Engine.update(engine);
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope.display();
  rope1.display();
  rope2.display();
  rope4.display();
  rope3.display();
  rectMode(CENTER);
  
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45})
	  }
}



