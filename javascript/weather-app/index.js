import countries from "countries-list";
const countryData = countries?.countries;
const userTab = document.querySelector('[data-userWeather]');
const searchTab = document.querySelector('[data-searchTab]');
const weatherContainer = document.querySelector('.weather-container');
const grantLocationContainer = document.querySelector('.grant-location-container');
const searchForm = document.querySelector('[data-searchForm]');
const loadingScreen = document.querySelector('.loding-container');
const userInfoContainer = document.querySelector('.info-container');
const grantAccessButton = document.querySelector("[data-grantAccess]");
const apiKey = "699b6d4969df449fae8185719231607";

const localCoordinates = sessionStorage.getItem("user-coordinates");
let currentTab = userTab;
currentTab.classList.add("current-tab");


if(!localCoordinates){
    grantLocationContainer.classList.add("active");
}

function switchTab(clickedTab){
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;

        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            searchForm.classList.add("active");
            grantLocationContainer.classList.remove("active");
        }else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }
    }
}


function getFromSessionStorage(){
    // check if co-ordinates are already present in session storage.
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        grantLocationContainer.classList.add("active");
    }else{
        const coords = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coords);
    }
}

async function fetchUserWeatherInfo(coordinates){
    const {lat, lon} = coordinates;

    // make grant container invisible.
    grantLocationContainer.classList.remove("active");
    loadingScreen.classList.add("active");

    // api call
    try{
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`);
        const data = await response.json();
        console.log(data);
        loadingScreen.classList.remove('active');
        userInfoContainer.classList.add('active');
        renderWeatherInfo(data);

    }catch(e){
        loadingScreen.classList.remove('active');
    }
}


function renderWeatherInfo(weatherInfo){
    // fetch the elements
    let cityName = document.querySelector('[data-cityName]');
    let countryIcons = document.querySelector('[data-countryIcon]');
    let dataDescription = document.querySelector('[data-weatherDescription]');
    let weatherIcon = document.querySelector('[data-weatherIcon]');
    let temp = document.querySelector('[data-temp]');

    let windSpeed = document.querySelector('[data-windSpeed]');
    let humidity = document.querySelector('[data-humidity]');
    let cloud = document.querySelector('[data-clouds]');

    // fetch values from weather info json
    cityName.innerText = weatherInfo?.location?.name;
    let countryCode = searchByName(weatherInfo?.location?.country);
    countryIcons.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    dataDescription.innerText= weatherInfo?.current?.condition?.text;
    weatherIcon.src = weatherInfo?.current?.condition?.icon;
    temp.innerText = `${weatherInfo?.current?.temp_c} °C`;
    windSpeed.innerText = `${weatherInfo?.current?.wind_kph}m/s`;
    humidity.innerText = `${weatherInfo?.current?.humidity}%`;
    cloud.innerText = `${weatherInfo?.current?.cloud}%`;

}


function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        alert("support for location not available");
    }
}


function showPosition(position){
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    };

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    console.log(userCoordinates);
    fetchUserWeatherInfo(userCoordinates);
}

userTab.addEventListener('click', () => {
    switchTab(userTab);
});

searchTab.addEventListener('click', () => {
    switchTab(searchTab);
});

grantAccessButton.addEventListener('click', getLocation);


let searchInput = document.querySelector('[data-searchInput]');
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(searchInput.value === "") return;
    fetchSearchWeatherInfo(searchInput.value);
});


function searchByName(name) {
    for (const key in countryData) {
        let countryName = countryData[key]["name"];
        if(name.includes(countryName)){
            return key;
        }
    }
    return null; // Not found
}

async function fetchSearchWeatherInfo(cityName) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantLocationContainer.classList.remove("active");
    try{
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=699b6d4969df449fae8185719231607 &q=${cityName}&aqi=no`);
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);

    }catch(e){
        alert("problem fetching location");
    }
}