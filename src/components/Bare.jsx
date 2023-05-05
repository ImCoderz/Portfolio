import React from 'react'

const bare = ({p,h3,link}) => {
  return (
    <div className='flex justify-center items-center mt-10 transition-all duration-100 bounce'>
        <div className='bare_gradient md:w-[60vw] w-[80vw] h-fit flex p-5 justify-between md:flex-row flex-col'>
            <div className='flex flex-col'>
                <p className='md:text-xs text-[10px]  font-thin '>{p}</p>
                <h3 className='lg:text-lg text-[14px] font-bold '>{h3}</h3>
            </div>
            <div className='cursor-pointer self-center z-10'>
                <a href={link} target='_blank'><button  className=' bg-black rounded-xl text-white font-thin lg:text-sm text-[12px] px-6 py-1 w-full md:w-auto cursor-pointer hover:scale-110'>Show All</button></a>
            </div>
        </div>
    </div>
  )
}

export default bare