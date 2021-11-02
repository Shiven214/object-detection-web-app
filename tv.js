img="";
statusz="";
objects= [];

function preload(){
img=loadImage("tv and ac.jpg");
}

function draw(){
    image(img, 0, 0, 640, 420);

    if (statusz != ""){
        for(i= 0;  i< objects.length; i++){
            document.getElementById("status").innerHTML="Status : object detected";

            fill("red");
            percent= floor(objects[i].confidence*100);
            text(objects[i].label + "" + percent + "%",  objects[i].x + 15, objects[i].y +15);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    } 
}

function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector= ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting objects";
}

function modelLoaded(){
    console.log("model is loaded");
    statusz=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, result){
    if(error){
        console.log(error);
    }
    console.log(result);
    objects=result;
}

function back(){
    window.location ="index.html";
}

function tvandac(){
    window.location="tv.html";
}