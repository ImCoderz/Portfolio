import React from 'react'
import Project from './Project'
import Bare from './Bare'

const Projectpage = () => {
  return (
   <div className='flex flex-col justify-center items-center mr-32'>
        <div className='flex flex-col w-[60vw] h-[45vw]  relative'>
            <select name="Project" id="Projects" className='bg-transparent text-white text-xl font-bold  absolute top-20 left- z-50 outline-none '>
                <option value="Project1" className='text-black text-xs '>Project1</option> 
                <option value="Project2" className='text-black text-xs '>Project2</option>
                <option value="Project3" className='text-black text-xs '>Project3</option>
                <option value="Project4" className='text-black text-xs '>Project4</option>
            </select>
            <div className='pt-14  w-[50vw] h-[80vh] flex flex-col project4 text-center z-0 top-20 left-60 absolute  items-center gap-10'>
                <h1 className='text-2xl text-white font-bold hidden '>Project 1</h1>
                <div className='w-[200px] h-[200px] rounded-full bg-white'></div>
                <p className=' text-left pl-4 text-sm font-thin text-textcolor w-[45vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium non, quidem officiis veritatis, rem unde atque placeat deserunt natus voluptates sit consequuntur, rerum maiores animi maxime quibusdam. Perspiciatis, ratione?</p>
            </div>

            <div className='pt-14 w-[50vw] h-[80vh] flex flex-col project3 text-center top-20 left-40 absolute z-10  items-center gap-10'>
                <h1 className='text-2xl text-white font-bold hidden '>Project 1</h1>
                <div className='w-[200px] h-[200px] rounded-full bg-white'></div>
                <p className=' text-left pl-4 text-sm font-thin text-textcolor w-[45vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium non, quidem officiis veritatis, rem unde atque placeat deserunt natus voluptates sit consequuntur, rerum maiores animi maxime quibusdam. Perspiciatis, ratione?</p>
            </div>

            <div className='pt-14 w-[50vw] h-[80vh] flex flex-col project2 text-center top-20 left-20 z-20 absolute items-center gap-10 '>
                <h1 className='text-2xl text-white font-bold  hidden'>Project 1</h1>
                <div className='w-[200px] h-[200px] rounded-full bg-white'></div>
                <p className=' text-left pl-4 text-sm font-thin text-textcolor w-[45vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium non, quidem officiis veritatis, rem unde atque placeat deserunt natus voluptates sit consequuntur, rerum maiores animi maxime quibusdam. Perspiciatis, ratione?</p>
            </div>

            <div className='pt-14 w-[50vw] h-[80vh] flex flex-col bg-[#1B78DE] text-center top-20 absolute z-30  items-center gap-10 '>
                <h1 className='text-2xl text-white font-bold  hidden'>Project 1</h1>
                <div className='w-[200px] h-[200px] rounded-full bg-white'></div>
                <p className=' text-left pl-4 text-sm font-thin text-textcolor w-fit'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium non, quidem officiis veritatis, rem unde atque placeat deserunt natus voluptates sit consequuntur, rerum maiores animi maxime quibusdam. Perspiciatis, ratione?</p>
            </div>  
        </div>
        <div className='ml-28'>
        <Bare p={'Request Early Access to Get Started'} h3={"Register today & start exploring the endless possiblities."}/>
        </div>
   </div>
  )
}

export default Projectpage