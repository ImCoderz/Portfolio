import React from 'react'
import ilab from '../assets/ilab.png'
import cas from '../assets/cas.png'
import portfolio from '../assets/portfolio.png'
import sushi from '../assets/sushi.png'
//import './swiper.scss'
import Project from './Project'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import Bare from './Bare';
const Projectslider = () => {
  
  return (
    <div>
      <div className='w-full h-fit lg:px-52 px-[5vw]  mt-20 gap-5'>
        <h1 className='text-white text-2xl font-bold text-center pulse3' id='Projects'>Projects</h1>
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        navigation
        pagination={{ clickable: true }}

        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        centeredSlides={true}
        speed={900}
        autoplay={{
          delay:3000,
        }}

      >
          <SwiperSlide><Project title={"CAS INPT"} description={"Description"} picture={cas}/></SwiperSlide>
          <SwiperSlide><Project title={"ILAB Donation"} description={"Description"} picture={ilab}/></SwiperSlide>
          <SwiperSlide><Project title={"Reservation Restaurant"} description={"Description"} picture={sushi}/></SwiperSlide>
          <SwiperSlide><Project title={"Portfolio"} description={"Description"} picture={portfolio} /></SwiperSlide>
          {/* <SwiperSlide><Project title={"Arduino"} description={"Description"}/></SwiperSlide> */}
          {/* <SwiperSlide><Project title={"Reservation Terrain"} description={"Description"}/></SwiperSlide> */}
      </Swiper>
      
    </div>
    <Bare p={'Visit My GITHUB'} h3={"Click on the button to acces to all my project"}/>
    </div>
    
  )
}

export default Projectslider