const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2,box3,box4,box5,box6,box7,box8,box9;
var ground,stage;
var slingshot,polygon;

var bg = "black";
var score =0;

function preload() {
    time();
}

function setup() {
  var canvas = createCanvas(1200,650);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,600,1200,20);
  stage = new Ground(400,250,500,10);

  box1 = new Box(330,235,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(390,235,30,40);
  box4 = new Box(420,235,30,40);
  box5 = new Box(450,235,30,40);
  box6 = new Box(360,195,30,40);
  box7 = new Box(390,195,30,40);
  box8 = new Box(420,195,30,40);
  box9 = new Box(390,155,30,40);
  var options = {
    density : 1.0
  }
  polygon = Bodies.circle(50,200,20,options)
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100, y:200});

}

function draw() {
 
  background(bg);
  Engine.update(engine);

  ground.display();
  stage.display();
  slingshot.display();
  
  box1.display();
  box1.score();

  box2.display();
  box2.score();

  box3.display();
  box3.score();

  box4.display();
  box4.score();

  box5.display();
  box5.score();

  box6.display();
  box6.score();

  box7.display();
  box7.score();

  box8.display();
  box8.score();

  box9.display();
  box9.score();
  circle(polygon.position.x,polygon.position.y,20);

  noStroke();
  fill("white");
  textSize(35);
  text("score:" + score , 900 , 50 )

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed() {
  if (keyCode==32) {
      slingshot.attach(this.polygon)
  }
}

async function time() {
  var json1 = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var json2 = await json1.json();
  console.log(json2);
  var date = json2.datetime;
  console.log(date);
  var time = date.slice(11,13);
  console.log(time);

  if (time >= 6 && time <= 18 ) {
      bg = "black";
  }
  else {
      bg = "white";
  }

} 