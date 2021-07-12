const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var engine,world;
var ball,blower,blowerMouth;
var button;





function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width/2+80,height/2-80,40);
  blower = new Blower(width/2-50,height/2+50,150,20);
  blowerMouth = new BlowerMouth(width/2+70,height/2+20,100,90);

  button = createButton("BLOW");
  button.position(width/2,height-100);
  button.mousePressed(blow);
  
}

function draw() {
  background("#7d8eab"); 
  Engine.update(engine);
  ball.show();
  blower.show();
  blowerMouth.show();
  
  drawSprites();
}
function blow()
{
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
}