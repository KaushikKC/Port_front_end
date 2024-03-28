import React from 'react'
import Proposalsample from '../components/Proposalsample'
import Accepted from '../components/Accepted'

function Proposals() {
  return (
    <div>
        <div className='m-[60px] flex flex-row'>
          <p className='text-[40px]'>Proposals</p>
          <div className='flex flex-row space-x-16 pl-[250px] pt-[17px]'>
            <p className='hover:font-semibold hover:text-[#2DA2B5]'>All</p>
            <p className='hover:font-semibold hover:text-[#2DA2B5]'>Fleet</p>
            <p className='hover:font-semibold hover:text-[#2DA2B5]'> Ship</p>
            <p className='hover:font-semibold hover:text-[#2DA2B5]'>Designation</p>
            <p className='hover:font-semibold hover:text-[#2DA2B5]'>Event</p>
          </div>
          <div className='mx-[150px] my-[8px]'>
            <button type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl text-white  w-[120px] flex justify-center hover:font-bold'> Create </button>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 p-[20px]'>
        <Proposalsample />
        <Accepted />
        </div>
    </div>
  )
}

export default Proposals
