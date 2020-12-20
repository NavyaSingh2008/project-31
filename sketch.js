const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var divisionHeight=300;
var divisions = [];
var plinkos = []
var particles = [];

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  World=engine.World;
  ground=newGround(240,700,460,10)
  for(var i=0;i<= width; i=i+80){
    divisions.push(new divisions(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new plinko(j,75));
  }
  for(var j = 15; j <=width; j=j+50){
    plinkos.push(new plinko(j,175));
  }
  for(var j = 5; j <=width; j=j+50){
    plinkos.push(new plinko(j,275));
  }
  for(var j = 0; j <=width; j=j+50){
    plinkos.push(new plinko(j,375));
  }
}

function draw() {
  background("black");
  Engine.update(engine); 
  ground.display();
  drawSprites();
}