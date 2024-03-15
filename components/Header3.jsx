"use client"
import React from 'react'

const Header3 = () => {
  return ( 
    <div className='bg-gradient-to-r from-red-500 to-red-400 h-[280px]'>
        <div className='p-5 mx-10'>
           <h2 className='text-3xl text-white text-center font-bold'>
             Over 157,000 hotel and homes across 35 Countries</h2>
        </div>
        <div className='grid grid-cols-5 mx-10 my-5'>
            <input type="text" placeholder='Search..'  className=' h-16 col-span-2 outline-none px-3 text-lg border-r-2 border-gray-400' />
            <input type="text" placeholder='Search..' className='h-16 outline-none col-span-1 px-3 text-lg border-r-2 border-gray-400' />
            <input type="text" placeholder='Search..' className='h-16 outline-none px-3 text-lg col-span-1 border-r-2 border-gray-400' />
            <button type='submit'  className='h-16 px-3 py-2 col-span-1 bg-green-400 hover:cursor:pointer hover:bg-green-600 text-white'>Search</button>
        </div>
        <div className="flex mx-20 my-5 font-bold">
        <button type='submit'  className='h-16 px-3 py-2 col-span-1  hover:cursor-pointer text-white'>Continue Your Search</button>
          
        <button type='submit'  className='h-16 hover:bg-gray-500 px-3 py-2 col-span-1 border-2 border-white hover:cursor-pointer rounded-xl text-white'>Home stay in India</button>
        </div>
    </div>
  )
}

export default Header3
