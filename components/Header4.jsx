"use client"
import React from 'react'
import Image from 'next/image'
const Header4 = () => {
  return (
    <div>
      <div className='flex my-14 border-2 rounded-lg  border-gray-300 items-center px-5'>
        <div className='flex items-center'>
            <Image src={"/fire.jpg"} alt='fire' width={200} height={200} className='w-32 h-32 rounded-full '/>
        </div>
        <div className='text-xl'>
            <p className='font-bold'>Get access to exclusive deal</p>
            <p>Only he best deal willl reach your inbox</p>
        </div>
        <div className="flex mx-[20vw]">
            <input type="email" className='px-4 py-2 outline-none border border-gray-300' placeholder='e.g join@gmail.com'  id=''/>
            <button type='submit' className='w-24 cursor-pointer rounded h-14 bg-red-500 text-xl text-white'>Notify</button>
        </div>
      </div>
    </div>
  )
}

export default Header4
