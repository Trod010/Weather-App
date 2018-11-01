var buttonX = document.getElementById("demo");
//var api = "https://fcc-weather-api.glitch.me/api/current?lon=:longitude&lat=:latitude";
var lat, lon;

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        // getWeather(lat, lon);
    } else {
        buttonX.innerHTML = "Geolocation not supported by this browser.";
    }
}

function showPosition(position) {
    var lat = "lat=" + position.coords.latitude;
    var lon = "lon=" + position.coords.longitude; 
    $.ajax("https://fcc-weather-api.glitch.me/api/current?" + lon + "&" + lat).done(function(data) {
        buttonX.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude + 
        "<br>Temperature: " + data.responseText.match(",\\s\"main\":{\\s\"temp\":(\d+\.\d+),")[0];
    });
    
}




