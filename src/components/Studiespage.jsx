import React from 'react'
import Card from './Card'
import Bare from './Bare'
import Snow from './Snow'
const Studiespage = () => {
  return (
    <div> 
      <div className=' flex flex-col lg:px-40 px-28 mt-20 gap-4 relative'>
        <h1 id='Studies' className='text-2xl font-bold text-white text-center'>Studies</h1>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 place-items-center transition-all animate-slideup duration-100'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div className='w-[500px] h-[500px] rounded-full absolute blurpurple md:left-[360px] left-32 top-32  '></div>
      </div>
      <Bare p={'Request Early Access to Get Started'} h3={"Register today & start exploring the endless possiblities."}/>
    </div>
   
  )
}

export default Studiespage