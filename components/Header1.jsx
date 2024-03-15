import React from 'react';
import Image from 'next/image';
import Block from './Block';
const Header1 = () => {
  return (
    <div className='flex flex- justify-betweeen border-2 border-gray-300 items-center h-28 px-10 w-full'>
      <Image src={"/logo.png"} className='w-24 h-280' alt="logo"height={100} width={100}
      />

    <div className='flex px-[6rem] text-sm flex-row gap-20'>
      <Block title={"Become a member"} para={"Additional 0% off on stays"}image={"/member.jpg"}/>
      <Block title={"OYO for Business"} para={"Trusted by 5000 Compansies"} image={"/busi.png"}/>
      <Block title={"List your Property"} para={"Start earning in 30 min."} image={"/property.png"}/>      <Block title={"9283134526"} para={"Call us to Book Now"} image={"/PHONE.png"}/>
      </div>
      <div className='flex items-center'>
      <Image src={"/login.png"} className='w-24 h-100' width={200} height={200}  alt="logo"/>
      <h3 className='font-bold'>Login & Signup</h3>
      </div>
    </div>
  )
}

export default Header1
