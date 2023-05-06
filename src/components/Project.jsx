import React, { useState } from 'react'
import Swiper from 'swiper'


const Project = ({title,description,picture,link,host}) => {
  return (
    <div className='flex sm:min-h-[550px] min-h-[460px] pb-10  flex-col items-center justify-center bg-blue1color text-textcolor w-full h-fit mt-8 md:px-20 px-4 py-4 gap-6 animate-slidedown transition-all duration-100'>
        
        <h3 className='text-xl font-bold text-white  top-0 cursor-pointer' >{title}</h3>
        <div className={` md:h-[300px] h-[200px] w-[90%] rounded-2xl  bg-white`}>
          <img className='md:h-[300px] h-[200px] w-full object-contain' src={picture} alt="picture" />
        </div>

        <p className={`lg:text-sm md:text-[12px] sm:text-[10px] text-[9px] `}>{description}</p>
        <div className='flex gap-10'>
          <a href={link} target="_blank" className=' hover:opacity-40 duration-300 underline'>Source code</a>
          {host&&(
            <a className='hover:opacity-40 duration-300 underline' target="_blank" href={host}>Visit Website</a>
          )}
            
        </div>
    </div>
  )
}

export default Project