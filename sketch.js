
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = []
var plinkos = []
var divisions = []
var divisionheight = 300;

function preload(){
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(240, 790, 480, 20)

	makeDivisions();
	makePlinkos();
	Engine.run(engine);
  
}


function draw() {
  background(0);

  rectMode(CENTER)
  ground.display();

  spawnParticle();
  showDivisions();
  showPlinkos();
}

function spawnParticle(){
	if (frameCount%60 === 0){
		particles.push(new Particle(random(width/2 -10, width/2 + 10), 10, 10));
	}

	for (var j = 0; j < particles.length; j++ ){
		particles[j].display();
	}
}

function makeDivisions(){
	for (var k = 0; k <= width; k += 80){
		divisions.push(new Division(k, height - divisionheight/2, 10, divisionheight))
	}
}

function showDivisions(){
	for (var k = 0; k < divisions.length; k++){
		divisions[k].display();
	}
}

function makePlinkos(){
	for (var j = 40; j <= width; j += 50){
		plinkos.push(new Plinko(j, 75))
	}

	for (var j = 15; j<= width -10; j+=50){
		plinkos.push(new Plinko(j, 175))
	}

	for (var j = 40; j<=width; j += 50){
		plinkos.push(new Plinko(j, 275))
	}

	for (var j = 15; j<= width -10; j+=50){
		plinkos.push(new Plinko(j, 375))
	}
}

function showPlinkos(){
	for (var j = 0; j < plinkos.length; j++){
		plinkos[j].display();
	}
}
