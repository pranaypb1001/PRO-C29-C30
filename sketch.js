const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var gameState = "onSling";

var score = 0;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(390, 255, 200, 20);

    block8= new Block (330, 235,30,40);
    block9= new Block (360, 235,30,40);
    block10= new Block (390, 235,30,40);
    block11= new Block(420, 235,30,40);
    block12= new Block (450, 235,30,40);
    block13 = new Block (360,195,30,40);
    block14 = new Block (390,195,30,40);
    block15 = new Block(420, 195,30,40);
    block16 = new Block (390, 155, 30, 40);

    polygon = new Bird(200,50);

    slingshot = new SlingShot(polygon.body,{x:200, y:50});
}

function draw(){
    background("black");
    
    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    /*block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();*/
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    polygon.display();
    ground.display();
    slingshot.display();
    
    block8.score();
    block9.score(); 
    block10.score(); 
    block11.score(); 
    block12.score(); 
    block13.score(); 
    block14.score(); 
    block15.score(); 
    block16.score(); 

}

function mouseDragged(){
     if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
        Matter.Body.applyForce(polygon.body,polygon.body.position,{x:5,y:-5});
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && gameState==="launched"){
        Matter.Body.setPosition(polygon.body,{x:200,y:50});
       slingshot.attach(polygon.body);
       gameState ="onSling";
    }
}