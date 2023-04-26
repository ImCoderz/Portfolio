import React from 'react'

const Skill = ({title,text}) => {
  return (
    <div className='flex md:gap-6 gap-2 sm:mt-2 relative'>
        <div className='md:w-[50px] w-[28px] md:h-[50px]  pr-7  h-[28px] rounded-full bg-blue2color md:pr-12'></div>
        <div className='mt-2'>
            <div className=' w-7 h-1 bg_gradient'/>
            <h3 className='md:text-sm text-[12px] text-white font-thin '>{title}</h3>
            <p className='sm:text-xs text-[10px] md:text-sm font-thin text-textcolor w-fit mt-1  '>{text}</p>
        </div>
        <div className=''>
           
        </div>
    </div>
  )
}

export default Skill