const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var hero;
var fly;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20
var say;
function preload() {
//preload the images here
backgroundImg=loadImage("background.png")
}

function setup() {
  createCanvas(1270, 600);
  engine = Engine.create();
  world = engine.world;
  // create sprites here

  ground = new Ground(500, 550);
  hero= new Hero(90,50)
  
  fly=new Fly(hero.body,{x:300, y:200})

  box1 = new Box(900, 100);
  box2 = new Box(900, 100);
  box3 = new Box(900, 100);
  box4 = new Box(900, 100);
  box5 = new Box(900, 100);
  box6 = new Box(900, 100);
  box7 = new Box(800, 100);
  box8 = new Box(800, 100);
  box9 = new Box(800, 100);
  box10 = new Box(800, 100);
  box11 = new Box(800, 100);
  box12 = new Box(800, 100);
  box13 = new Box(700, 100);
  box14 = new Box(700, 100);
  box15 = new Box(700, 100);
  box16 = new Box(700, 100);
  box17 = new Box(700, 100);
  box18 = new Box(700, 100);
  box19 = new Box(700, 100);
  box20 = new Box(700, 100);

  say=new Callout(100,200,50)


}

function draw() {
  background(backgroundImg);
  Engine.update(engine)

  fill(0)
  text("I need to pass through this wall", 100,300)
  text(" to catch the monster, can you help me?",100,350)
  text("Thanks",890,350)

  ground.display();
  hero.display();
  fly.display();

box1.display();
box2.display();
box3.display();
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()

say.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY})
}