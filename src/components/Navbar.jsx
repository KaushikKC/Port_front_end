import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-row bg-[#2DA2B5]'>
      <div className='p-[20px] '>
        <p className='text-white'>ShipitDAO</p>
      </div>
      <div className='flex flex-row py-[20px]'>
        <p className='ml-[450px] hover:text-white'>Builders</p>
        <p className='mx-[100px] hover:text-white'>Proposals</p>
        <p className='hover:text-white'>Events</p>
      </div>
      <div className='fixed right-3'>
        <button className='bg-white p-[10px] rounded-3xl my-[10px] hover:text-white'>Connect Wallet</button>
      </div>
    </div>
  )
}

export default Navbar
