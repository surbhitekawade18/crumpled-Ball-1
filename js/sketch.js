const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper;

//function preload(){
//    paper.addImage("assetes/paper.png")
//}
function setup(){
    
    var canvas = createCanvas(800,400);
    
    engine = Engine.create();
    world = engine.world;
   
    ground = new Ground(400,380,900,20)
    trash = new Paper(100,100,30,30)
    dustbin1  = new Dustbin(600,320,10,97)
    dustbin2 = new Dustbin(780,320,10,97)
    dustbin3 = new Dustbin(690,380,190,10)
    Engine.run(engine)
    //console.log(paper)
}

function draw(){
    background(0);
   // Engine.update(engine);
    ground.display();
    trash.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();

}

function keyPressed(){
    if(keyCode === 32){
     console.log(trash)
        Matter.Body.applyForce(trash.paper,trash.paper.position,{x:10,y:10})
    }
}
