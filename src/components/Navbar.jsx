import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex flex-row bg-[#2DA2B5]'>
      <div className='p-[20px] '>
        <Link to='/home' className='text-white'>ShipitDAO</Link>
      </div>
      <div className='flex flex-row py-[20px]'>
        <p className='ml-[450px] hover:text-white'>Builders</p>
        <p className='mx-[100px] hover:text-white'>Proposals</p>
        <p className='hover:text-white'>Events</p>
      </div>
      <div className='fixed right-3'>
        <button className='bg-white p-[10px] rounded-3xl my-[10px] hover:text-[#2DA2B5]'>Connect Wallet</button>
      </div>
    </div>
  )
}

export default Navbar
