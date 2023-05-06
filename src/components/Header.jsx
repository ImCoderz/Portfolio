import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react';
const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <header className='md:flex hidden px-12 lg:px-28 justify-between items-center h-[10vh] overflow-hidden w-full '>
        <div className='flex z-10'>
            <h1 className='text-xl font-extrabold text-white cursor-pointer bounce '><a href="/">Naama</a><span className='  text-orange-500'>.</span></h1>
        </div>
        <div>
            <ul className='flex gap-6 transition-all duration-100 bounce '>
                <li className='text-m font-normal p-2 text-orange-500  z-10 animate-pulse hover:text-orangecolor'><a href="#Home">Home</a></li>
                <li className='text-m font-normal text-white p-2 cursor-pointer z-10 hover:text-orangecolor'><a href="#Skills"> Skills</a></li>
                <li className='text-m font-normal text-white p-2 cursor-pointer z-10 hover:text-orangecolor'><a href="#Studies">Studies</a></li>
                <li className='text-m font-normal text-white p-2 cursor-pointer z-10 hover:text-orangecolor'><a href="#Projects">Projects</a></li>
                <li className='text-m font-normal text-white p-2 cursor-pointer z-10 hover:text-orangecolor'><a href="#Contact">Contact</a></li>
            </ul>
        </div>
        <div className='w-[400px] h-[400px] absolute bg-bluecolor top-0 left-0 blur-3xl'/>
      </header>
      <header className='md:hidden flex p-4 overflow-hidden '>
        <div className=' flex justify-between items-center w-screen  z-10'>
            <h1 className='text-xl font-extrabold text-white cursor-pointer'>Naama<span className='  text-orange-500'>.</span></h1>
            <AiOutlineMenu color='white' size={27} width={100} className=' cursor-pointer' onClick={()=>setMenu(!menu)}/>
        </div>
        {menu&&(
          <div className='absolute right-5 px-5 py-2 gap-2 z-50 top-12 bg-purple2color rounded-xl animate-slideright'>
            <ul className='flex flex-col transition-all duration-100 ease-in-out '>
                <li className='text-m font-normal md:p-2  p-[0.125rem] text-orange-500 cursor-pointer z-10'><a href="#Home">Home</a></li>
                <li className='text-m font-normal text-white md:p-2 p-[0.125rem] cursor-pointer z-10'><a href="#Skills">Skills</a></li>
                <li className='text-m font-normal text-white md:p-2 p-[0.125rem] cursor-pointer z-10'><a href="#Studies">Studies</a></li>
                <li className='text-m font-normal text-white md:p-2 p-[0.125rem] cursor-pointer z-10'><a href="#Projects">Projects</a></li>
                <li className='text-m font-normal text-white md:p-2  p-[0.125rem] cursor-pointer z-10'><a href="#Contact">Contact</a></li>
            </ul>
          </div>
        )
        }
        <div className='sm:w-[400px] w-[350px] h-[400px] absolute bg-bluecolor top-0 left-0 blur-3xl '/>
      </header>
    </div>
    
  )
}

export default Header