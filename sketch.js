
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	rectangle1 = Bodies.rectangle(625,605,10,100, {isStatic:true});
	World.add(world,rectangle1);

	rectangle2 = Bodies.rectangle(680,645,120,10, {isStatic:true});
	World.add(world,rectangle2);

	rectangle3 = Bodies.rectangle(735,605,10,100, {isStatic:true});
	World.add(world,rectangle3);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	Engine.run(engine);

	paper1= new Paper(100,500,20);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);

  //rectangle1.display();
  //rectangle2.display();
  //rectangle3.display();
 //ground.display();
 rect(ground.position.x,ground.position.y,width,10);
 rect(rectangle1.position.x,rectangle1.position.y,10,100);
 rect(rectangle2.position.x,rectangle2.position.y,120,10);
 rect(rectangle3.position.x,rectangle3.position.y,10,100);


  paper1.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:75,y:-75});
	}
}



