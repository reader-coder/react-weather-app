import React, { useState } from 'react';
import { UilSearch} from '@iconscout/react-unicons'

function Inputs({fetchWeather, setIsC, isC}) {

  const [city, setCity] = useState('');



  return (
    <div className='flex flex-row justify-center my-6'>
     <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input type="text" className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase' placeholder='Search for city...'
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        required
        />
        <UilSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' onClick={()=> city? fetchWeather(city): alert('Please type something.')}/>
     </div>
     <div className='flex flex-row w-1/4 items-center justify-center'>
        <button name='metric' className={`text-xl ${isC ? `text-yellow-500` : `text-white`} font-semibold mx-2`} onClick={()=>setIsC(true)}>°C</button>
        <p className='text-xl text-white'>|</p>
        <button name='imperial' className={`text-xl ${!isC ? `text-yellow-500` : `text-white`} font-semibold mx-2`} onClick={()=>setIsC(false)}>°F</button>
     </div>
    </div>
  )
}

export default Inputs