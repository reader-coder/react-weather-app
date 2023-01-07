import React from 'react'
import {UilTemperature, UilTemperaturePlus ,UilTemperatureMinus, UilTear, UilWind, UilSun, UilSunset} from '@iconscout/react-unicons'

const TemperatureDetails = ({weather,isC}) => {
  return (
    <div>
      <div className='flex items-center justify-center py-6 text-xl text-cyan-400'>
      {weather.current.condition.text}
    </div>
    <div className='flex flex-row items-center justify-between text-white py-3'>
      <img src={weather.current.condition.icon} alt="weather icon" className='w-25'/>
      <p className='text-5xl'>{isC?weather.current.temp_c:weather.current.temp_f}°</p>
      <div className='flex flex-col space-y-2'>


            <div className='flex font-light text-sm items-center justify-center'>
               <UilTemperature size={18} className='mr-1'/>
               Real feel:
               <span className='font-medium ml-1'>{isC? weather.current.feelslike_c : weather.current.feelslike_f}°</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
               <UilTear/>
               Humidity:
               <span className='font-medium ml-1'>{weather.current.humidity}%</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
               <UilWind size={18} className='mr-1'/>
               Wind:
               <span className='font-medium ml-1'>{weather.current.wind_kph} km/h</span>
            </div>


      </div>
    </div>

    <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>

      <UilSun/>
      <p className='font-light'>Rise: <span className='font-medium  ml-1'>{weather.forecast.forecastday['0'].astro.sunrise}</span></p>
      <p className='font-light'>|</p>

      <UilSunset/>
      <p className='font-light'>Set: <span className='font-medium ml-1'>{weather.forecast.forecastday['0'].astro.sunset}</span></p>
      <p className='font-light'>|</p>

      <UilTemperaturePlus/>
      <p className='font-light'>High: <span className='font-medium ml-1'>{isC? weather.forecast.forecastday['0'].day.maxtemp_c : weather.forecast.forecastday['0'].day.maxtemp_f}°</span></p>
      <p className='font-light'>|</p>

      <UilTemperatureMinus/>
      <p className='font-light'>Low: <span className='font-medium ml-1'>{isC ? weather.forecast.forecastday['0'].day.mintemp_c : weather.forecast.forecastday['0'].day.mintemp_f}°</span></p>
    </div>

    </div>
  )
}

export default TemperatureDetails