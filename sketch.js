	var paper,ground,trash1,launcher;
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;
	const Render = Matter.Render;
	const Constraint = Matter.Constraint;

	function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

	trash1 = new Trash(1100,750,150,150);
	ground = new Ground(400,760,1800,10);
	paper = new Paper(1100,500,50);
	launcher = new Launcher(paper.body,{x:100,y:600});
	Engine.run(engine);
	}


	function draw() {
	rectMode(CENTER);

	background(125);

	drawSprites();

	trash1.display();
	ground.display(); 
	paper.display();
	launcher.display();
		
	}
	function mouseDragged(){
		Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY}); 
	  }
	  function mouseReleased(){
		 launcher.fly();
	  }
	