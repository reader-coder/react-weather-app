import { useState, useEffect } from 'react';
import './App.css';
import Forecast from './components/Forecast';
import DailyForecast from './components/DailyForecast';
import Inputs from './components/Inputs';
import TemperatureDetails from './components/TemperatureDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import axios from 'axios';



function App() {

  const [weather, setWeather]= useState({});
  const[isC, setIsC] = useState(true)

  
function fetchWeather(query){
 axios.get(`http://api.weatherapi.com/v1/forecast.json?key=2ef2f88f2f924f0d9de172508230101&q=${query}&days=5&aqi=no&alerts=no`).then(res=>setWeather(res.data)).catch(err=>setWeather('Location Not Found!'))
  }

  useEffect(()=>{

  fetchWeather('Kochi');

  },[])


  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 '>
      <TopButtons fetchWeather={fetchWeather}/>
      <Inputs 
      fetchWeather={fetchWeather}
      setIsC={setIsC}
      isC={isC}
      />
      {weather.location? 
      <>
      <TimeAndLocation weather={weather}/>
      <TemperatureDetails weather={weather}
      isC={isC}/>
      <Forecast
      weather={weather}
      isC={isC}/>
      <DailyForecast
      weather={weather}
      isC={isC}/>
      </> : <h2 className='text-white'>{weather==='Location Not Found!' ? weather : `Fetching Data...`}</h2>}
    </div>
  );
}

export default App;
