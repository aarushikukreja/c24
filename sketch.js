const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground, pig1, log1;
var box3, box4, pig2, log2
var box5, log3, log4
var bird
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground= new Ground(600, 380, 1200, 20)

    box1 = new Box(700,300,70,70);
    box2= new Box(900, 300, 70,70)
    pig1 = new Pig(800, 320)
    log1 = new Log( 800, 270, 275, PI/2)

    box3 =new Box(700, 240, 70, 70)
    box4= new Box( 900, 240, 70, 70)
    pig2 =new Pig(800, 260)
    log2= new Log( 800, 200, 275, PI/2)

    box5= new Box( 800, 170, 70, 70)
    log3 = new Log( 750, 130, 138, PI/4 )
    log4 = new Log( 850, 130, 138, -PI/4 )

    bird= new Bird(100, 100)
   


}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
   ground.display();
   pig1.display();
   log1.display();
   box3.display();
   box4.display();
   pig2.display();
   log2.display();
   log3. display();
   box5.display();
   log4.display();
   bird.display();
   
}