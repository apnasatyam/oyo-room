import React from 'react'
import Image from 'next/image'
import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import Header3 from '@/components/Header3'
import Head from 'next/head'
import Header4 from '@/components/Header4'
import Footer from '@/components/Footer'
const Home = () => {
  return (
    <div >
      <Head>
        <title>OYO: India's Best Online Hotel Booking Site For Sanatized Stay.</title>
        <link rel="icon" href='/icon.png'></link>
      </Head>
      <Header1/>
      <Header2/>
    <Header3/>
    <div className='mx-20 my-14'>
      <Image src={"/banner1.avif"} width={200} height={200} className='h-80 w-full'/>
    </div>
    <div className='mx-20 mb-14'>
    <Image src={"/banner2.avif"} width={200} height={200} className='h-40 w-full'/>
    <Header4/> 
    </div>
    <Footer/>
    </div>
  )
}

export default Home
