import React, { useEffect, useState } from 'react'
import Row from './Row'

const list=['figure1','figure2','figure3','figure4','figure5','figure6','figure7'];
//md:row-start-auto md:row-end-auto row-start-1 row-end-2
let l;
const Homepage = () => {
    const [List, setList] = useState(list)

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
        <div className='sm:px-28 px-0 md:px-12 md:mt-20 mt-16 grid md:grid-cols-2 grid-col-1 md:gap-6 gap-20 place-items-center'>
            <div className='relative items-center flex flex-col gap-3 animate-slideleft'>
                <div>
                    <h1 id='Home' className='gradient text-center lg:w-[250px] w-[220px] lg:text-xl text-lg font-bold'>Hi! I’m <br/> Abderrahmane Naama <br /> <span className='text-sm'>a software engineer</span>.</h1>
                </div>
                <div className='flex items-center flex-col gap-6 bg-purple3color w-fit rounded-[30px] p-4'>
                    <Row text={'a software engineer'}/>
                    <Row text={'a software engineer'}/>
                    <Row text={'a software engineer'}/>
                </div>
                <div className='w-[230px] h-[230px] absolute top-32 right-16 blurpurple '></div>
            </div>
            
            <div className=' grid relative place-items-center ml-12 animate-slideright transition-shadow duration-100'>
                <div className={`lg:w-[70px] w-[55px] lg:h-[70px] h-[55px] rounded-full bg-purple2color absolute lg:right-0 lg:-top-10 right-0 -top-8 ${List[0]} spin`}></div>
                <div className={`lg:w-[70px] w-[55px] lg:h-[70px] h-[55px] rounded-full bg-purple2color absolute lg:right-32 lg:-top-20 right-32 -top-16 ${List[1]} spin`}></div>
                <div className={`lg:w-[70px] w-[55px] lg:h-[70px] h-[55px] rounded-full bg-purple2color absolute lg:-left-12 lg:-top-4 -left-8 -top-0 ${List[2]} spin`}></div>
                <div className={`lg:w-[300px] lg:h-[300px] w-[270px] h-[270px] rounded-full ${List[3]} z-10 animate-slowfade`}></div>
                <div className='w-[370px] h-[370px] rounded-full absolute top-8 right-[-18px] blurpurple'></div>
                <div className={`lg:w-[70px] w-[55px] lg:h-[70px] h-[55px] rounded-full bg-purple2color absolute lg:-left-24 lg:top-32 -left-16 top-32 ${List[4]} spin`}></div>
                <div className={`lg:w-[70px] w-[55px] lg:h-[70px] h-[55px] rounded-full bg-purple2color absolute lg:-left-8 lg:-bottom-8 -left-4 -bottom-4 ${List[5]} spin`}></div>
                <div className={`lg:w-[70px] w-[55px] lg:h-[70px] h-[55px] rounded-full bg-purple2color absolute lg:right-20 lg:-bottom-20 right-24 -bottom-16 ${List[6]} spin`}></div>
            </div>
        </div>
    )
}

export default Homepage