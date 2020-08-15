const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground1;

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

var box1 = createSprite(20, 205, 30, 350);
var box2 = createSprite(780, 205, 30, 350);
var box21 = createSprite(95, 230, 100, 300);
var box22 = createSprite(705, 230, 100, 300);
var box31 = createSprite(222, 270, 150, 220);
var box32 = createSprite(578, 270, 150, 220);
var mainbox32 = createSprite(400, 290, 200, 180);

 
  ground1 = new Ground(400,390,800,20);
  
  
  
  
  
  
 
}

function draw() {
  background(0);
  Engine.update(engine);
  triangle(300, 200, 500, 200, 400, 100);
  triangle(42, 80, 145, 80, 96, 20);
  triangle(758, 80, 655, 80, 704, 20);
 
  ground1.display();
  


  drawSprites();
}