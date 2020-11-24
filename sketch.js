var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var object1,object2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	//helicopterSprite.velocityY=2;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//object1 = createSprite(100,100,50,50);
//object1.shapeColor=color(255);
	

	//object2 = createSprite(200,100,50,50);
	//object2.shapeColor=color(255);
	//object2.addImage(packageIMG);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 


  drawSprites();

  if(keyPressed(packageSprite)){
	console.log("11111");

	  packageSprite.velocityY=1;

	  //object2.velocityY=1;
  }
 
}

function keyPressed(packageSprite) {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	console.log("2222");

	packageSprite.velocityY  =1;
	//object2.velocityY= 1;
 
	return true;
 }
	else{
		return false;
	}
  }




