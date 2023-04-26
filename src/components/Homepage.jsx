import React, { useEffect, useRef, useState } from 'react'
import inpt from '../assets/inpt.png'
import softeng from '../assets/softeng.png'
import web from '../assets/web.jpeg'
import Row from './Row'
import figure1 from '../assets/figure11.jpg'
import figure2 from '../assets/figure2.webp'
import figure3 from '../assets/figure3.jpeg'
import figure4 from '../assets/figure4.webp'
import figure5 from '../assets/figure5.jpeg'
import figure6 from '../assets/figure6.jpeg'
import figure7 from '../assets/figure7.webp'

const list=[figure1,figure2,figure3,figure4,figure5,figure6,figure7];
//md:row-start-auto md:row-end-auto row-start-1 row-end-2
let l;
const Homepage = () => {
    const [changed,setChanged]=useState(false);
    const [List, setList] = useState(list);

    useEffect(() => {
        const interval = setInterval(()=>{
            setList((prevList)=>changePicture(prevList))
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    
    const changePicture=(L)=>{
        l=[L[L.length-1]];
        for(let i=0;i<L.length-1;i++){
            l[i+1]=L[i]
        }
        return l;
    }

    return (
        <div className='px-0  md:mt-20 mt-1 flex md:flex-row flex-col-reverse md:justify-between justify-center lg:px-32 md:px-12  items-center  md:gap-6 gap-10 place-items-center'>
            <div className='relative items-center flex flex-col gap-3 animate-slideleft'>
                <div>
                    <h1 id='Home' className='gradient text-center lg:w-[250px] w-[250px]  lg:text-xl text-lg font-bold'>Hi! I’m <br/> Abderrahmane Naama <br /> <span className='text-sm'>a software engineer student</span>.</h1>
                </div>
                <div className='flex items-center flex-col gap-6 bg-purple3color w-fit rounded-[30px] p-4'>
                    <Row picture={inpt} text={'an INPT student'}/>
                    <Row picture={softeng} text={'a software engineer'}/>
                    <Row picture={web} text={'a web developer'}/>
                </div>
                <div className='w-[230px] h-[230px] absolute top-32 right-16 blurpurple '></div>
            </div>
            
            <div className=' grid relative place-items-center md:ml-12 animate-slideright transition-shadow duration-100'>
                <div className={`lg:w-[70px] w-[55px] lg:h-[70px] h-[55px] rounded-full bg-purple2color absolute lg:-right-4 md:flex hidden lg:-top-10 -right-4 -top-8  spin`}>
                    <img className='object-cover pictureblur flex justify-center items-center rounded-full w-full h-full ' src={List[0]} alt="" />
                </div>
                <div className={`lg:w-[70px] w-[55px] lg:h-[70px] h-[55px] rounded-full bg-purple2color absolute lg:right-32 md:flex hidden lg:-top-20 right-32 -top-16  spin`}>
                    <img className='object-cover pictureblur flex justify-center items-center rounded-full w-full h-full ' src={List[1]} alt="" />
                </div>
                <div className={`lg:w-[70px] w-[55px] lg:h-[70px] h-[55px] rounded-full bg-purple2color absolute lg:-left-12 md:flex hidden lg:-top-4 -left-8 -top-0  spin`}>
                    <img className='object-cover pictureblur flex justify-center items-center rounded-full w-full h-full ' src={List[2]} alt="" />
                </div>
                <div className={` lg:w-[300px] lg:h-[300px] w-[270px] h-[270px] rounded-full bg-purple2color  z-10 animate-slowfade`}>
                    <img className='object-cover pictureblur flex justify-center items-center rounded-full w-full h-full' src={List[6]} alt="" />
                </div>
                <div className='w-[370px] h-[370px] rounded-full absolute top-8 right-[-18px] blurpurple'></div>
                <div className={`lg:w-[70px] w-[55px] lg:h-[70px] h-[55px] rounded-full bg-purple2color absolute lg:-left-24 md:flex hidden lg:top-32 -left-16 top-32  spin`}>
                    <img className='object-cover pictureblur flex justify-center items-center rounded-full w-full h-full ' src={List[3]} alt="" />
                </div>
                <div className={`lg:w-[70px] w-[55px] lg:h-[70px] h-[55px] rounded-full bg-purple2color absolute lg:-left-8  md:flex hidden lg:-bottom-8 -left-4 -bottom-4  spin`}>
                    <img className='object-cover pictureblur flex justify-center items-center rounded-full w-full h-full ' src={List[4]} alt="" />
                </div>
                <div className={`lg:w-[70px] w-[55px] lg:h-[70px] h-[55px] rounded-full bg-purple2color absolute lg:right-20 md:flex hidden lg:-bottom-20 right-24 -bottom-16  spin`}>
                    <img className='object-cover pictureblur flex justify-center items-center rounded-full w-full h-full ' src={List[5]} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Homepage