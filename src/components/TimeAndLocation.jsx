import React from 'react'

const TimeAndLocation = ({weather}) => {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-xl font-extralight'>
            {weather.location.localtime.slice(0,11)} | {weather.location.localtime.slice(11,16)}
            </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>{weather.location.name}, {weather.location.country}</p>
        </div>
    </div>
  )
}

export default TimeAndLocation