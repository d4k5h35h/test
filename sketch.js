const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Van;
function setup(){
  createCanvas(displayWidth,displayHeight);
  Van = new van(200,50);
  engine = Engine.create();
  world = engine.world;
}

function draw(){
  Engine.update(engine);
  background(0);
  Van.display();
}

function windowResized() {
  resizeCanvas(displayWidth, displayHeight);
}