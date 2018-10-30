var buttonX = document.getElementById("demo");

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        buttonX.innerHTML = "Geolocation not supported by this browser.";
    }
}

function showPosition(position) {
    buttonX.innerHTML = "Latitude" + position.coords.latitude + "<br>Longitude: " + position.coords.longitude + "<br>Temperature: ";
}

