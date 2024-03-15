import React from 'react'
import Image from 'next/image'
const Block = ({title,image, para}) => {
  return (
    <div className='w-48 h-full flex items-center'>
    <Image src={image} alt="demo" height={200} width={200} className='w-10 mr-5 h-10 rounded-full'/>
    <div>
        <h3 className='font-bold'>{title}</h3>
        <p className='text-sm text-gray-400 line-clamp-1'>{para}</p>
    </div>
      
    </div>
  )
}

export default Block
