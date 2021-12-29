const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Contraint = Matter.Constraint;

var engine, world
var particle1, particle2
var block1, block2
var ball1, ball2, ball3, ball4, ball5
var clickBar
var slingshot

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  var options ={
    isStatic:true
  }
  var ball_options ={
    isStatic:false,
    restitution:1.3,
    friction:0,
    density:0.8
  }
  block1 = Bodies.rectangle(windowWidth/2,windowHeight-50,windowWidth,20, options)
  World.add(world, block1)
  fill("brown")
  rectMode(CENTER)

  slingshot = new Slingshot()

  ball1 = Bodies.circle(windowWidth/2-90,200,20, ball_options)
  ball2 = Bodies.circle(windowWidth/2-45,200,20,ball_options)
  ball3 = Bodies.circle(windowWidth/2,200,20,ball_options)
  ball4 = Bodies.circle(ball3.position.x+45,200,20,ball_options)
  ball5 = Bodies.circle(ball3.position.x+90,200,20,ball_options)
  World.add(world, ball1)
  World.add(world, ball2)
  World.add(world, ball3)
  World.add(world, ball4)
  World.add(world,ball5)
  fill("white")
  ellipseMode(CENTER)
}


function draw() 
{
  background(51);
  Engine.update(engine);
  rect(block1.position.x, block1.position.y, windowWidth, 20)
  ellipse(ball1.position.x,ball1.position.y,40,40)
  ellipse(ball2.position.x,ball2.position.y,40,40)
  ellipse(ball3.position.x,ball3.position.y,40,40)
  ellipse(ball4.position.x,ball4.position.y,40,40)
  ellipse(ball5.position.x,ball5.position.y,40,40)
}

