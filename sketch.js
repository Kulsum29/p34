const Engine = Matter.Engine;
const Bodies=Matter.Bodies;
const World= Matter.World;
const Constraint = Matter.Constraint;

var engine,world;
var bg,heroImage,hero,ground,string;
var b1,b2,b3,b4,b5,b6;
var b7,b8,b9,b10,b11,b12;
flag=0

function preload() {
//preload the images here
  bg=loadImage("sky.png");
  heroImage=loadImage("toothless.png")
}

function setup() {
  createCanvas(1530, 750);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(740,700,1600,7)
  hero=new Hero(200,200);
  string=new Fly(hero.body,{x:250,y:200});
  b1=new Block(600,600)
  b2=new Block(600,500)
  b3=new Block(600,400)
  b4=new Block(600,300)
  b5=new Block(600,200)
  b6=new Block(600,100)
  b7=new Block(800,600)
  b8=new Block(800,500)
  b9=new Block(800,400)
  b10=new Block(1000,600)
  b11=new Block(1000,500)
  b12=new Block(1000,400)
  // create sprites here

}

function draw() {
  Engine.update(engine);
  background(bg);
  push()
  imageMode(CENTER)
  var heroPos=hero.getPosition();
  image(heroImage,heroPos.x,heroPos.y,hero.radius*2,hero.radius*2)
  pop()
  var groundPos=ground.getPosition();
  rectMode(CENTER)
  rect(groundPos.x,groundPos.y,ground.width,ground.height);
  string.display();
  b1.show();
  b2.show();
  b3.show()
  b4.show()
  b5.show()
  b6.show()
  b7.show();
  b8.show();
  b9.show()
  b10.show()
  b11.show()
  b12.show()
  if(flag===1){
    text("Press \'space\' to get another chance!",550,50)
  }

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  string.remove()
  flag=1
}
function keyPressed(){
  if(keyCode===32){
    string.getBack(hero.body);
    Matter.Body.setPosition(hero.body,{x:200,y:200})
    flag=0
  }
}
