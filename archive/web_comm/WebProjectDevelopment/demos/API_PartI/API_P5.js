let temps = [];

let weatherDates = [];

var city;

var currentCondition;


function setup(){
    var canvas = createCanvas(400,300);
    canvas.hide();
    //loadJSON and call the callback function gotData
    //this request URL is formatted for forecast?, for zip=27701,us in "imperial" units, and ends with my API Key
    loadJSON("https://api.openweathermap.org/data/2.5/forecast?units=imperial&APPID=ba2e504dd7871e48f816c0e459d77ac7&zip=27701,us", gotData);
}

function gotData(data) {
    //what does the data look like?
    //console.log(weather); 
    
    console.log(data.list);
    
 
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
    
    console.log(weatherDates[2],temps[2],currentCondition,city);
}