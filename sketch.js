const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;

function preload() {
  backgroundImg = loadImage("maxresdefault-back.jpg");
   bg = loadImage("bg2.jpg");
}



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new box(300,300,500,20);
  ground = new box(0,390,10000,20);
  box2 = new target(250,200,50,70)
  box3 = new target(260,100,50,70);
  box4 = new target(270,100,50,70);
  box4 = new target(280,100,50,70);
  box5 = new target(290,100,50,70);
  box6 = new target(300,100,50,70);
  box7 = new target(300,100,50,70);
  box8 = new target(300,100,50,70);
  box9 = new target(300,100,50,70);
  box10 = new target(300,100,50,70);
  
  
  shooter = new paper(100,200,10);                                  
  chain1 = new SlingShot(shooter.body , {x : 100 , y : 200});

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);


ground.display();
shooter.display();
chain1.display();
//box2.display2();
box2.display2();
box4.display();
box5.display2();
box6.display();
box1.display2();
box7.display();
box8.display2();
box9.display();
box10.display2();


box2.score();
box4.score();
box5.score();
box6.score();
//box1.score();
box7.score();
box8.score();
box9.score();
box10.score();

fill("black");
textSize(20);
text(score,750,40);


drawSprites();

}

function mouseDragged(){
  Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain1.fly();
}

function keyPressed(){

if(keyCode === 32){
  chain1.attach(shooter.body);
   Matter.Body.setPosition(shooter.body,{x:100, y:200});
}

}

function keyPressed(){

  if(keyCode === 32){
    chain1.attach(shooter.body);
     Matter.Body.setPosition(shooter.body,{x:100, y:200});
  }
  
  }

  async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
  
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        background(backgroundImg) ;
    }
    else{
      background("white");
    }
  
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
  }

  function keyPressed(){

    if(keyCode === 32){
      chain1.attach(shooter.body);
       Matter.Body.setPosition(shooter.body,{x:100, y:200});
    }
    
    }