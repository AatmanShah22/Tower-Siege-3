const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var stone;
var ground;
var count=0;
var backgroundImg;
var bg;

function preload () {
  
  polygon_img=loadImage("polygon.png");
  getBackgroundImage();

}

function setup () {

  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);


  block1 = new Block(300,275,30,40);
  
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  

  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  

  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  

  block16 = new Block(390,155,30,40);


  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  

  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  
  
  blocks9 = new Block(700,95,30,40);

  polygon = new Polygon(100,350,50,50);

  slingShot = new SlingShot(polygon.body,{x:100,y:350});

  
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  
}
function draw() {
  background("lightblue"); 
 
  if(backgroundImg)
  background(backgroundImg);

  Engine.update(engine);
  
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("green");
  block1.display();
  fill("green");
  block2.display();
  fill("green");
  block3.display();
  fill("green");
  block4.display();
  fill("green");
  block5.display();
  fill("green");
  block6.display();
  fill("green");
  block7.display();
  fill("red");
  block8.display();
  fill("red");
  block9.display();
  fill("red");
  block10.display();
  fill("red");
  block11.display();
  fill("red");
  block12.display();
  fill("blue");
  block13.display();
  fill("blue");
  block14.display();
  fill("blue");
  block15.display();
  fill("orange");
  block16.display();
  fill("green");
  blocks1.display();
  fill("green");
  blocks2.display();
  fill("green");
  blocks3.display();
  fill("green");
  blocks4.display();
  fill("green");
  blocks5.display();
  fill("red");
  blocks6.display();
  fill("red");
  blocks7.display();
  fill("red");
  blocks8.display();
  fill("blue")
  blocks9.display();
  fill("green");

  
  textSize(50);
  fill(115,247,217);
  text("Score:" + count,1100,100);

 


  imageMode (CENTER);
  image (polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display ();
}

function mouseDragged () {
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
 }

function mouseReleased () {
  slingShot.fly();

}

function keyPressed () {

  if(keyCode === 32){
      slingShot.attach(this.ball);
  
    }
}
async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJson = await response.json();
 // console.log(responseJson);
   
  var dateTime = await responseJson.datetime;
 // console.log(dateTime);
  var hour = dateTime.slice(11,13);
  //console.log(hour);

  if(hour>6 && hour<18){
    bg = "Sprites/day.jpg";
    
  } else {
    bg = "Sprites/night.jpg";
  }
  console.log(bg)
  backgroundImg = loadImage(bg);
}