
const API_KEY = '0380efade6cabe7a39a8d86acbb9a0b0';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

// 4 days forecast = https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}

// 16 days daily forecast = api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}


//WEATHER APi

const WEATHER_API_KEY = '2ef2f88f2f924f0d9de172508230101'

const WEATHER_API_URL = 'http://api.weatherapi.com/v1/forecast.json?key={API key}&q={city name}&days={number of days}&aqi=no&alerts=no';




function sortedData (data){
  
  console.log(data)
  return(data)
}

async function fetchWeather(query){
  return await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2ef2f88f2f924f0d9de172508230101&q=${query}&days=5&aqi=no&alerts=no`).then(res=>res.json()).then(data=>sortedData(data)).catch(err=>console.log(err));
}


export {sortedData, fetchWeather}