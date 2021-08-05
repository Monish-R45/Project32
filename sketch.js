const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour;

function preload() {
     getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
     if(backgroundImg){
          background(backgroundImg) 
     }



    Engine.update(engine);
    
    if(hour>=12){
    text("Time:"+hour%12+"PM",50,50)
    }else if(hour===0){
     text("Time:12 AM",50,50)
    }else{
        text("Time:"+hour%12+"AM",50,50)
    }


}

async function getBackgroundImg(){

    var response = await fetch("https://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();

    var datetime = responseJSON.currentDateTime;
    hour = datetime.slice(11,13);
    
    if(hour>=04 && hour<=06){
        bg = "sunrise1.png";
    }
    else if(hour>=06 && hour<=08){
        bg = "sunrise2.png";
        console.log("Hello")
    }else if(hour>=04 && hour<=06){
        bg = "sunset10.png";
    }else if(hour==0 && hour<=03){
        bg = "sunset11.png"
    }else{
        bg = "sunset12.png"
    }

    backgroundImg = loadImage(bg);
    console.log(hour);
    
    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
