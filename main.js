

const apiKey = "1f15ce3f8ac618fe2a4c029ea9f0114c";

// https://api.openweathermap.org/data/2.5/weather?units=metric&q=germany;

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const waetherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }else {

    var data = await response.json();
     
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        waetherIcon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        waetherIcon.src = "images/clear.png";
    }else if (data.weather[0].main == "Rain"){
        waetherIcon.src = "images/rain.png";
    }else if (data.weather[0].main == "Drizzle"){
        waetherIcon.src = "images/drizzle.png";
    }else if (data.weather[0].main == "Drizzle"){
        waetherIcon.src = "images/mist.png";
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";

    }
    
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

