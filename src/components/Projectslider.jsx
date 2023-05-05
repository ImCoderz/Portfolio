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
      <div className='w-full  lg:px-52 px-[5vw]  mt-20 gap-5'>
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
          <SwiperSlide><Project title={"CAS INPT"} description={"This project is for a club at my school that helps people in need. My team and I started from scratch with our own design, using Figma to respect the UX/UI criteria. We then developed the project using React.js, Tailwind CSS, and Firebase."} host={"https://casinptt.web.app/"}  picture={cas} link={"https://github.com/ImCoderz/casInpt"}/></SwiperSlide>
          
          <SwiperSlide><Project title={"ILAB Donation"} description={"This project is for an association that gathers clothes, money, machines, and other resources for people in need. It uses the principle of double authentication, one for the donator and one for the needy, where each specifies what to give (donator) and what to take (needy). After designing it with Figma, we developed it using React.js, Tailwind CSS, Spring Boot, and MySQL."} host={"https://ilabassociation.vercel.app/"}  picture={ilab} link={"https://github.com/ImCoderz/pfa"}/></SwiperSlide>
          
          <SwiperSlide><Project title={"Reservation Restaurant"} description={"This is one of my first projects where users can authenticate and make a reservation for a specific time at our restaurant. It also includes a burger builder feature. For technologies, I used pure JavaScript and CSS."} picture={sushi} link={"https://github.com/ImCoderz/web"}/></SwiperSlide>
          
          <SwiperSlide><Project title={"Portfolio"} description={"This is my first portfolio, and I started it from scratch. I first designed it using Figma and chose the appropriate color scheme and project. After that, I developed it using React.js and Tailwind CSS."} picture={portfolio} host={"https://abdonaama.vercel.app/"}  link={"https://github.com/ImCoderz/Portfolio"}/></SwiperSlide>
          {/* <SwiperSlide><Project title={"Arduino"} description={"Description"}/></SwiperSlide> */}
          {/* <SwiperSlide><Project title={"Reservation Terrain"} description={"Description"}/></SwiperSlide> */}
      </Swiper>
      
    </div>
    <Bare p={'Visit My GITHUB'} h3={"Click on the button to acces to all my project"} link={"https://github.com/ImCoderz"}/>
    </div>
    
  )
}

export default Projectslider