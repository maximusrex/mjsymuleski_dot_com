

var r = 218;
var g = 160;
var b = 211;

var circleX = 0;
var circleY = 100;
var circleWidth = 50;

function setup() {
  createCanvas(600, 400);
    //frameRate(5);
}

// draw a circle
function draw() {
   
    console.log(frameCount);
    background(r, g, b);

    //ellipse
    fill(250, 200, 200);
    console.log(circleX);
    ellipse(circleX, circleY, circleWidth, circleWidth);

    circleX=circleX+1;
    if(circleX>615) {
        circleX = 0;
    }
}