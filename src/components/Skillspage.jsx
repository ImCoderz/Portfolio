import React from 'react'
import Skill from './Skill'
import Bare from './Bare'
const Skillspage = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-32  '>
        <h1 id='Skills' className='text-center font-bold text-3xl text-white gap-3 pulse3'>Skills</h1>
        <div className='flex flex-col w-[400px] sm:w-[60vw] h-fit gap-6 bg-blue1color rounded-lg lg:pl-20 lg:py-24 md:pl-12 md:py-16 py-12 pl-8 relative'>
            <div className='absolute top-4 left-4'>
                <div className=' w-10 h-1 bg_gradient'/>
                <h1 className='md:text-2xl text-[16px] font-bold text-white pulse3'>Skills</h1>
            </div>
            <Skill title={'Skill1'} text={"a software engineeringa software engineeringa software engineeringa software engineeringa so"}/>
            <Skill title={'Skill2'} text={"a software engineeringa software engineeringa software engineeringa software engineeringa so"}/>
            <Skill title={'Skill3'} text={"a software engineeringa software engineeringa software engineeringa software engineeringa so"}/>
            <Skill title={'Skill4'} text={"a software engineeringa software engineeringa software engineeringa software engineeringa so"}/>
        </div>
        <Bare p={'Request Early Access to Get Started'} h3={"Register today & start exploring the endless possiblities."}/>
    </div>
  )
}

export default Skillspage