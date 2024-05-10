let loc = document.querySelector(".location");
let temp = document.querySelector(".temp");
let description = document.querySelector(".description");
let iconImg = document.getElementById("icon");
let wind =  document.getElementById("wind");
let humidity = document.getElementById("humidity");


let lon;
let lat;

window.addEventListener('load',getPosition);

function getPosition(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position){
    console.log(position);
    lon = position.coords.longitude;
    lat = position.coords.latitude;

    // const api = "6d055e39ee237af35ca066f35474e9df";
    const api = "bd5e378503939ddaee76f12ad7a97608";

    const base =
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +`lon=${lon}&appid=bd5e378503939ddaee76f12ad7a97608`;

    fetch(base)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        temp.textContent = Math.floor(data.main.temp -273)+" °C";
        description.textContent =  data.weather[0].description;
        loc.textContent = data.name +" , "+ data.sys.country;
        let icon1 = data.weather[0].icon;
        // iconImg.innerHTML = `<img src="./${icon1}.svg" style= 'height:10rem'/>`;
        wind.textContent = data.wind.speed + " km/hr";
        humidity.textContent = data.main.humidity
    })
    
}
