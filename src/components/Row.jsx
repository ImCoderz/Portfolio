import React from 'react'

const Row = ({text,picture}) => {
  return (
    <div className='flex gap-6 items-center w-full'>
        <div className='lg:w-[70px] w-[50px] lg:h-[70px] h-[50px] rounded-full bg-purple2color  '>
          <img className='object-cover pictureblur2 flex justify-center items-center rounded-full w-full h-full' src={picture} alt="picture" />
        </div>
        <h1 className='text-xs text-textcolor text-center z-20 mx-auto'>{text}</h1>
        <div className='lg:w-[70px] w-[50px] lg:h-[70px] h-[50px] rounded-full bg-purple2color'>
          <img className='object-cover pictureblur2 flex justify-center items-center rounded-full w-full h-full' src={picture} alt="picture" />
        </div>
    </div>
  )
}

export default Row