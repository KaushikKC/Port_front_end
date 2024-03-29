import React from 'react'
import Eventcard from '../components/Eventcard'

function Events() {
  return (
    <div>
      <div className='m-[60px] flex flex-row'>
          <p className='text-[40px]'>Events</p>
          <div className='flex flex-row justify-end w-full space-x-16 pt-[17px]'>
            <p className='hover:font-semibold hover:text-[#2DA2B5]'>Upcoming</p>
            <p className='hover:font-semibold hover:text-[#2DA2B5]'>Past</p>
          </div>
          <div className='mx-[150px] my-[8px]'>
            <button type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl text-white  w-[120px] flex justify-center hover:font-bold'> Create +</button>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <Eventcard />
            <Eventcard />
            <Eventcard />
            <Eventcard />
        </div>
    </div>
  )
}

export default Events
