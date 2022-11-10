const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

   
var gol;



function preload(){

}


function setup() 
{
  createCanvas(700,400);
  engine = Engine.create();
  world = engine.world;


  gol = createSprite(350,23,400,15);
  gol.shapeColor = "white"

  trave1 = createSprite(150,30,30,30);
  trave1.shapeColor = "white"

  trave2 = createSprite(550,30,30,30);
  trave2.shapeColor = "white"

  
  

  


  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  imageMode(CENTER);
}

function draw() 
{
  
background("#008000")
  

  Engine.update(engine);

  drawSprites();  
}






