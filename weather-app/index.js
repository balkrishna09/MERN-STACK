const userTab = document.querySelector(".tab1");
const searchTab = document.querySelector(".tab2");
const userContainer = document.querySelector(".weatherContainer");
const grantAccessContainer = document.querySelector(".grantLocation");
const searchForm = document.querySelector(".formContainer");
const loadingScreen = document.querySelector(".loadingContainer");
const userInfoContainer = document.querySelector(".weatherInfo");


//we are making current tab and at first it will by default equal to usertab
let currentTab = userTab;
const API = "d1845658f92b31c64bd94f06f7188c9c";
//adding custom classlist to current tab 
currentTab.classList.add("current-tab");
getFromSessionStorage();

//tab switching function
function switchTab(clickedTab){
    //if clickedTab is current tab then it will be removed from current tab
    if(clickedTab != currentTab){
       //remove classlist from current tab
       currentTab.classList.remove("current-tab");
       //add classlist to clicked tab
       currentTab = clickedTab;
       currentTab.classList.add("current-tab");

       if(!searchForm.classList.contains("active")){
        //removing active from userifo page
        userInfoContainer.classList.remove("active");

        //removing active  from grant access page
        grantAccessContainer.classList.remove("active");

        //adding active to search form page so that its visible rest is invisible
        searchForm.classList.add("active");
       }

       else{
        //removing active from search form page
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
        //getting cordinate from local storage
        getFromSessionStorage();
       }
    }
}


userTab.addEventListener('click',()=>{
    switchTab(userTab);
})

searchTab.addEventListener('click',()=>{
    switchTab(searchTab);
})


//if cordinate are present in session storage
//grant
function getFromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        grantAccessContainer.classList.add("active");
    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates){
    const {lat, lon} = coordinates;
    //make grant container invisible
    grantAccessContainer.classList.remove("active");
    //make loading screen active
    loadingScreen.classList.add("active");

    //API call
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`);        
        const data = await response.json();
        console.log(response);

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");

        renderWeatherInfo(data);
    }
    catch(err){
        loadingScreen.classList.remove("active");
    }
}
function renderWeatherInfo(weatherInfo){
    // console.log(weatherInfo);
        // fetch element
        const cityName = document.querySelector(".cityName");
        const countryIcon = document.querySelector(".countryIcon");
        const description = document.querySelector(".weatherDesc");
        const weatherIcon= document.querySelector(".weatherIcon");
        const temp = document.querySelector(".temp");
        const windSpeed = document.querySelector(".dataWindspeed");
        const humidity = document.querySelector(".dataHumidity");
        const cloud = document.querySelector(".cloudData");

        //fetch value from weathInfo Object and put in UI element
        cityName.innerText = weatherInfo?.name;  
        // extarcting country flag
        countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
        description.innerText = weatherInfo?.weather?.[0]?.description;
        weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
        temp.innerText = `${weatherInfo?.main?.temp}°C`;
        windSpeed.innerText = `${weatherInfo?.wind?.speed}m/s`;
        humidity.innerText = `${weatherInfo?.main?.humidity}%`;
        cloud.innerText = `${weatherInfo?.clouds?.all}%`;
}

const grantAccessButton = document.querySelector(".btn");
grantAccessButton.addEventListener('click',getLocation);
    
function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        else{
            prompt("Geolocation is not supported by this browser");
        }
}

function showPosition(position){
        const userCoordinates ={
            lat: position.coords.latitude,
            lon: position.coords.longitude, 
        };

        sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
        fetchUserWeatherInfo(userCoordinates);
        
}

const searchInput = document.querySelector(".dataSearchInput");
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let cityName = searchInput.value;
    if(cityName == ""){
        return;
    }
    else{
        fetchSearchWeatherInfo(cityName);
    }
})

async function fetchSearchWeatherInfo(city){
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");
    
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`);
        const data = await response.json();
        // console.log(response);
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        //hW
    }
}