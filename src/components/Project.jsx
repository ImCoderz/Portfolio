import React, { useState } from 'react'
import Swiper from 'swiper'


const Project = () => {
  const [description, setDescription] = useState(true)     
  return (
    <div className='flex  flex-col items-center justify-center bg-blue1color text-textcolor w-full h-fit mt-8 px-20 py-4 gap-6 animate-slidedown transition-all duration-100'>
        
        <div className={`${description? `w-[200px]`:`w-full`} h-[200px] ${description&&(`rounded-full`)}  bg-blue-500`}>
          <img src="" alt="" />
        </div>

        <h3 className='text-xl font-bold text-white  top-0 cursor-pointer' onClick={()=>setDescription(!description)}>Description</h3>
        <p className={`lg:text-sm md:text-[12px] sm:text-[10px] text-[9px] ${description?`flex`:`hidden`}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores id eligendi quod. Soluta aliquid molestiae reprehenderit voluptas adipisci accusamus magni, officiis eligendi dolorem architecto earum ipsam a repellat dolores distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, amet unde, cupiditate, itaque debitis minus vel enim accusamus impedit quasi illo ipsum iste culpa pariatur ut adipisci excepturi deserunt quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nulla sapiente, dolor illum sunt dolorum animi rem ipsum, velit fugiat earum, dolore cupiditate aspernatur rerum aliquam modi reprehenderit. Amet, illum.</p>
    </div>
  )
}

export default Project