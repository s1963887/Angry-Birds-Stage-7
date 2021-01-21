//Examples of different types of data in javascript

//number
var num = 56;
console.log(num);
//strings
var name = "Daniel";
console.log(name);
//Boolean
var bool = false;
console.log(bool);
//undefined
var object;
console.log(object);
//Reassign the same undefined object to null
//null
object = null;
console.log(object);

//empty array
var a = [];
console.log(a);

//array with same type of data
var arr1 = [34,56,78,90];
console.log(arr1);

//array with different types of data
var arr2 = ["hello", 89, false, "world", 56.6];
console.log(arr2);

//length of the array
console.log(arr2.length);

//accessing the vale of array
console.log(arr2[1]);
console.log(arr2[arr2.length-1]);

//array inside an array
var arr3 = [34,46,78,["hello", "meow", "bye"]];
console.log(arr3);
console.log(arr3[0]);
console.log(arr3[3][2]);

//pushing elemnts into an array
arr1.push(45);
arr1.push(56,67,78,90);
console.log(arr1);

//popping out the last value
arr1.pop();
console.log(arr1);

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState = "onSling"



function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){

    if(gameState !== "launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}