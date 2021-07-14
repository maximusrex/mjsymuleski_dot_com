//inputs on the page
var button;
var input;

//break up the api url to add user input
var api = "https://api.openweathermap.org/data/2.5/forecast?zip=" //get the forecast
var zip; //this is undefined rn.
var zipLoc = ",us";//how can we make this a changing value too
var apiKey = "&APPID=ba2e504dd7871e48f816c0e459d77ac7";
var units = "&units=imperial";




//the variables we'll need to store our data
let temps = [];
let weatherDates = [];
var city;
var currentCondition;
var start=0;
var startY=400;

function setup(){
    createCanvas(800,400);
    //background(51);
    
    button = select('#weatherButton');
    button.mousePressed(weatherQuery);
    
    input = select('#zipCode');
}

function weatherQuery(){
    //get the zipCode
    zip = input.value();
    //add it to construct url
    var url = api + zip + zipLoc + units + apiKey;
    console.log(url);
    loadJSON(url,gotData);
}

function gotData(data) {
    //console.log(data);
    //get the city
    city = data.city.name;
    
    for(var i=0;i<data.list.length;i++) {
        //console.log(data.list[i]);
        var thisDate = data.list[i].dt_txt;
        weatherDates.push(thisDate);
        //now, fill up the other array with the rest of the info
        var thisForecast = data.list[i].main.temp;
        temps.push(thisForecast);
        //console.log(thisForecast);
        
    }//end of the for loop through the weather data
    //get the current condition at index 0 - right now, the closest forecast
    currentCondition = data.list[0].weather[0].description;
    //console.log(currentCondition);
}

function draw(){
    background("#afe0ff")
    //is there stuff in the array?
    if(temps.length>0){
        //then draw it to the canvas
    fill('#2e2e2e');
    textSize(25);
    text("Temp Forecast for " + city, 10, 25);
    
        
        let minTemp = min(temps) - 10;//scale these a tad
        let maxTemp = max(temps) + 10;
        
        //console.log(maxTemp - minTemp);//like what's the size of this?
        
        var freezing = map(32,minTemp,maxTemp,height,0);
        stroke('#000');
        line(0,freezing,width,freezing);
        fill('#000');
        textSize(11);
        text('32 * F', 5, freezing);
        
        //map a point for each 
        for(var i=0;i<temps.length;i++){
            let val = temps[i];
            let xpos = map(i,0,temps.length,10,width-10);
            let ypos = map(val,minTemp,maxTemp,height,0);
            let colorTemp = map(val,-10,100,0,255);
            stroke(colorTemp,100,100);
            point(xpos,ypos);
            textSize(10);
            text(val, xpos,ypos);
            
            push();//new drawing state
            translate(xpos,height);
            rotate(3*PI / 2);
            translate(-xpos,-height);
            stroke('#000');
            rectMode(CENTER);
            text(weatherDates[i],xpos,400);
            pop();//reset drawing state (rotate,translate)
        }
        //console.log(weatherDates.length);
        
    }//as long as we have temps
    
    //add an animation
    textSize(24);
    stroke('#491f4d');
    text(currentCondition,start,startY);
    start+=3;
    startY--;
    if (start>width){
        start=0;
        startY=400;
    }
    
}


