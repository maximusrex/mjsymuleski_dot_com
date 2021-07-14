//P5_PartTwo
//working in the p5 Instance mode
//p5 is just JavaScript, so we can organize differently to have several different canvases in the same page, and play nicely with other js and jquery.  This is called working in "instance mode"

//storing the sketch as a function in a variable creates it in the js namespace
var mySketch = function(sketch) {
    //setting these to variables that will be global within the sketch
    var x = 300;
    var y = 200;
    var width = 100;
    var height = 100;
    
    sketch.setup = function() {
        sketch.createCanvas(600,400);
        sketch.background(252);
        sketch.rectMode(sketch.CENTER);
    };
    sketch.draw = function() {
        sketch.fill(255);
        sketch.stroke('#000');
        sketch.rect(x,y,width,height);
        width++;
        height++;
        if (width>600) {
            width = 100;
            height= 100;
        }
    };
};

var myp5 = new p5(mySketch, 'canvas1');

var canvas2 = function(sketch){
    var circle = {
        x: 5,
        y: 0,
        diameter: 50,
    };
    
    //hsla syntax c = color('hsla(160, 100%, 50%, 0.5)')
    var h = 150;
    var s = 100;
    var l = 70;
    var a = 0.5;
    
    sketch.setup = function() {
        sketch.createCanvas(600,400);
        sketch.colorMode(sketch.HSL);
    };
    
    sketch.draw = function() {
        sketch.background(255,100,100,0.01);
        sketch.fill(h,s,l,a);
        sketch.stroke(0,0,0,0.2);
        sketch.ellipse(circle.x,circle.y,circle.diameter,circle.diameter);
        circle.x++;
        if(circle.x>700) {
            circle.x = 0;
            circle.y+=50;
            if (circle.y>500) {
                circle.y=0;
            };
        };
    };
};

var myp5_a = new p5(canvas2, 'canvas2');

var canvas3 = function(sketch){
    var angle = 2.0;
    var offset = 300;
    var scalar = 3.5;
    var speed = 0.1;
    var col = {
        r: 255,
        g: 0,
        b: 0
    };

    sketch.setup = function() { 
        sketch.createCanvas(600, 600);
        sketch.noStroke();
        sketch.background (0);
    } 

    sketch.draw = function() { 
        //have rgb values change with the position of the mouse?, or with the up and down arrow
        col.r = sketch.random(0, 200);
        col.g = sketch.random(0, 250);
        col.b = sketch.random(100, 250);
        var x = offset + sketch.cos(angle) * scalar;
        var y = offset + sketch.sin(angle) * scalar;
        sketch.fill(col.r, col.g, col.b);
        sketch.noStroke();
        sketch.ellipse(x, y, 5, 5);
        angle += speed;//increases by 0.1
        scalar += speed;//increases by 0.1
        };
    };
var myp5_b = new p5(canvas3, 'canvas3');

var canvas4 = function(sketch){


    sketch.setup = function() { 
        sketch.createCanvas(600, 400);
        //draw background only once in setup
        sketch.background(255);
    } 

    sketch.draw = function() { 
        sketch.fill(250,200,200);
    }
    
    //now only do this when mouse pressed
    sketch.mouseDragged = function() {
        sketch.ellipse(sketch.mouseX, sketch.mouseY, 100, 100);
    }
        
    };
var myp5_b = new p5(canvas4, 'canvas4');