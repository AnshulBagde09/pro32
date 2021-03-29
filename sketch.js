const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var totalCh = 3;
var balanceCh = totalCh;
var gameState = "onSling";
var score = 0
var level = 0
var gamerState = 1;
scoreText = [];
scoreText.push(ScoreText);  
function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(250, 270, 100, 240);
    platform2 = new Ground(900,130,50,10);
    platform3 = new Ground(950,120,10,100);
    dartBoard = new DartBoard(900,100);

    shuriken = new Shuriken(200,50);

    ninja = new Ninja(shuriken.body,{x:200, y:50});
}

function draw(){
    background(0);

    Engine.update(engine);

    textSize(50)
    text("score = " + score, 900,50);
    scoreText.push(text);

    ninja.display();    
    ground.display();

    platform2.display();
    platform3.display();

    dartBoard.display();
    dartBoard.score();

    shuriken.display();
    platform.display();
}

function mouseDragged(){
        Matter.Body.setPosition(shuriken.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    ninja.fly(); // In Ninja.js 
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 /*&& gamerState !== 3*/){
        shuriken.trajectory = [];
        Matter.Body.setPosition(shuriken.body, {x:  200, y: 50});
        dartBoard = new DartBoard(900,100);
        ninja.attach(shuriken.body);
        gamerState = gamerState+1;
        totalCh = balanceCh - 1;

    }

    if(gamerState === 3){
        level = level + 1;
    }
}