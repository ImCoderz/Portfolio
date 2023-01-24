import React from 'react'

const Row = ({text}) => {
  return (
    <div className='flex gap-6 items-center'>
        <div className='lg:w-[70px] w-[50px] lg:h-[70px] h-[50px] rounded-full bg-purple2color '></div>
        <h1 className='text-xs text-textcolor z-20'>{text}</h1>
        <div className='lg:w-[70px] w-[50px] lg:h-[70px] h-[50px] rounded-full bg-purple2color'></div>
    </div>
  )
}

export default Row