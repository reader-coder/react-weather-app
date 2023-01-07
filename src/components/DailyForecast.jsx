import React from 'react'

const DailyForecast = ({weather, isC}) => {
    
   let upcomingForecast =  weather.forecast.forecastday

    
  return (
   <div>
     <div className='flex items-center justify-start mt-6'>
        <p className='text-white font-medium uppercase'>daily forecast</p>
        </div>
        <hr className='my-2'/>
        <div className='flex flex-row items-center justify-around text-white'>

            
                 <div  className='flex flex-col items-center justify-center'>
                 <p className='font-light text-sm'>
                     Tomorrow
                 </p>
                 <img src={upcomingForecast[1].day.condition.icon} alt="" className='w-8 my-1'/>
                 <p className='font-medium'>{isC? upcomingForecast[1].day.avgtemp_c : upcomingForecast[1].day.avgtemp_f}°</p>
             </div>

             <div className='flex flex-col items-center justify-center'>
                 <p className='font-light text-sm'>
                     Day After Tomorrow
                 </p>
                 <img src={upcomingForecast[2].day.condition.icon} alt="" className='w-8 my-1'/>
                 <p className='font-medium'>{isC ? upcomingForecast[2].day.avgtemp_c : upcomingForecast[2].day.avgtemp_f}°</p>
             </div>
            

        </div>
   </div>
  )
}

export default DailyForecast