import React from 'react'
import basics from '../assets/basics.jpg'

const Card = ({picture,title,description}) => {
  return (
    <div className='  bg-gradient-to-b from-purple1color to-purple3color overflow-hidden z-10   lg:w-[250px] flex flex-col gap-1 items-center lg:h-[380px] md:w-[170px] md:h-[270px] sm:w-[200px] sm:h-[300px] w-[300px] h-[400px] rounded-[30px] border mb-4'>
        <img src={picture} className='h-[60%] w-full' alt="basics" />
        <div className='w-full flex flex-col items-center justify-center px-2 gap-1 '>
          <h3 className='font-semibold text-white text-sm text-center '>{title}</h3>
          <p className='text-xs w-full font-normal  text-textcolor'>{description}</p>
        </div>
    </div>
  )
}

export default Card