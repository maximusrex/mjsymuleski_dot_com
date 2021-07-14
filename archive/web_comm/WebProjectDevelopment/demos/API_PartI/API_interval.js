var mapimg;

var clat = 0;
var clon = 0;
var zoom = 1;

var ww = 1024;
var hh = 512;

var url = 'http://api.open-notify.org/iss-now.json';
var issX = 0;
var issY = 0;

function preload() {
  // The clon and clat in this url are edited to be in the correct order.
  mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' +
    clon + ',' + clat + ',' + zoom + '/' +
    ww + 'x' + hh +
    '?access_token=pk.eyJ1IjoibWF4c3ltIiwiYSI6ImNqdHFiYXpqdTAweWU0ZnFvYzZxZ3k2dHMifQ.OEKzRYmmNvxSOizYTIhC5g');
}

function setup(){
    createCanvas(ww,hh);
    
    
    //set an interval to get that space station every however many seconds
    setInterval(askISS,1000);
}

function draw(){
    translate(width / 2, height / 2);
    imageMode(CENTER);
    image(mapimg, 0, 0);
    translate(-width/2,-height/2);
    fill(255);
    ellipse(issX,issY,25,25);
    fill(255,0,0);
    textSize(18);
    text("International space station",issX+15,issY)
}

function askISS() {
    loadJSON(url,gotData);
}

function gotData(data){
    var lat = data.iss_position.latitude;
    var long = data.iss_position.longitude;
    issX = map(lat,-90,90,0,width);
    issY = map(long,-180,180,0,height);
}
