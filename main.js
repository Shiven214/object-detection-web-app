img="";
statusz="";

function preload(){
img=loadImage("image.jpg");
}

function draw(){


}

function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector= ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting objects";
}