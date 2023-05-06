import React from 'react'
import Skill from './Skill'
import Bare from './Bare'
import dev from '../assets/dev.jpeg'
const Skillspage = () => {
  return (
    <div className='flex flex-col justify-center items-center md:mt-32 mt-16 '>
        <div className='flex flex-col w-[95%] sm:w-[60vw] h-fit gap-6 bg-blue1color rounded-lg lg:pl-20 lg:py-24 md:pl-12 md:py-16 py-12 pl-8 relative'>
            <div className='absolute top-4 left-4'>
                <div className=' w-10 h-1 bg_gradient'/>
                <h1 id='Skills' className='md:text-2xl text-[16px] font-bold text-white pulse3 '>Skills</h1>
            </div>
            <Skill title={'Web Development'} text={"I have a good knowledge of HTML, CSS, and JavaScript, and I am capable of developing good websites. In terms of frameworks, I use React.js for the front-end and either Node.js or Spring Boot for the back-end."}/>
            <Skill title={'Software Engineering'} text={"I have the knowledge, abilities, and practices necessary for developing high-quality software that meets user requirements and is delivered on time and within budget."}/>
            <Skill title={'Team Work'} text={"I have the ability to collaborate and work effectively with others towards a common goal.I can communicate clearly, listen actively, and contribute my ideas while also respecting the contributions of others."}/>
            <Skill title={'Flexibility'} text={"I have ability to adapt to changing circumstances and situations. I can adjust my plans, behavior, and attitude to meet new challenges and accommodate different perspectives. I am open-minded, willing to learn and try new things."}/>
        </div>
    </div>
  )
}

export default Skillspage