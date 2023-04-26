import React from 'react'
//import './swiper.scss'
import Project from './Project'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
// swiper bundle styles
//import 'swiper/swiper-bundle.min.css'
// swiper core styles
//import 'swiper/swiper.min.css'
// modules styles
import 'swiper/css';
import { Autoplay } from 'swiper';
import Bare from './Bare';
const Projectslider = () => {
  
  return (
    <div>
      <div className='w-full h-fit lg:px-52 px-[19.5vw]  mt-20 gap-5'>
        <h1 className='text-white text-2xl font-bold text-center pulse3' id='Projects'>Projects</h1>
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        centeredSlides={true}
        speed={900}
        autoplay={{
          delay:3000,
        }}
        modules={[Autoplay]}

      >
          <SwiperSlide><Project/></SwiperSlide>
          <SwiperSlide><Project/></SwiperSlide>
          <SwiperSlide><Project/></SwiperSlide>
          <SwiperSlide><Project/></SwiperSlide>
          <SwiperSlide><Project/></SwiperSlide>
          <SwiperSlide><Project/></SwiperSlide>
      </Swiper>
      
    </div>
    <Bare p={'Visit My GITHUB'} h3={"Click on the button to acces to all my project"}/>
    </div>
    
  )
}

export default Projectslider