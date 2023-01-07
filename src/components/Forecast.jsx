import React from 'react'

const Forecast = ({weather,isC}) => {

    let todayForecast = weather.forecast.forecastday['0'].hour.filter(hour=>hour.time>weather.current.last_updated);
    let tomorrowForecast = weather.forecast.forecastday['1'].hour;

    let forecast = todayForecast.length <5 ?  todayForecast.concat(tomorrowForecast).slice(0,5)
    : todayForecast.slice(0,5) 

  return (
   <div>
     <div className='flex items-center justify-start mt-6'>
        <p className='text-white font-medium uppercase'>hourly forecast</p>
        </div>
        <hr className='my-2'/>
        <div className='flex flex-row items-center justify-between text-white'>

            {forecast.map((hour,index)=>(
                 <div key={index} className='flex flex-col items-center justify-center'>
                 <p className='font-light text-sm'>
                     {hour.time.slice(11,16)}
                 </p>
                 <img src={hour.condition.icon} alt="" className='w-8 my-1'/>
                 <p className='font-medium'>{isC? hour.temp_c : hour.temp_f}°</p>
             </div>
            ))}

        </div>
   </div>
  )
}

export default Forecast