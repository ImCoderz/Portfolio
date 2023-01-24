import React from 'react'

const Contactpage = () => {
  return (
    <div className='flex flex-col gap-6 md:px-40 px-20 mt-20 relative '>
        <h1 id='Contact' className='text-2xl font-bold text-white text-center  py-1 '>Contact me</h1>
        <form action="submit" className='flex flex-col items-center sm:items-start  gap-4 '>
            <div className='flex gap-4 items-center md:w-[40vw]  w-[350px]  h-[10vh] bg-purple2color p-2 px-4 animate-slideright'>
                <label className=' text-xl font-bold text-white' htmlFor="Nom">Nom:</label>
                <input type="text" name='Nom' id='Nom'  className='flex bg-transparent px-10 flex-wrap z-10' />
            </div>
            <div className='flex gap-4 items-center md:w-[40vw] w-[350px]  h-[10vh] bg-purple2color sm:ml-[30vw] p-2 px-4 animate-slideleft'> 
                <label className=' text-xl font-bold text-white' htmlFor="Prenom">Prenom:</label>
                <input type="text" id='Prenom' name='Prenom' className='flex bg-transparent px-10 flex-wrap z-10' />
            </div>
            <div className='flex gap-4 items-center md:w-[40vw] w-[350px]  h-[10vh] bg-purple2color p-2 px-4 animate-slideright'>
                <label className=' text-xl font-bold text-white' htmlFor="Email">Email:</label>
                <input type="email" name='Email' id='Email' className='flex bg-transparent px-10 flex-wrap z-10' />
            </div>
            <div className='flex flex-col gap-4 items-center md:w-[40vw] w-[350px]  h-[48vh] bg-blue1color p-2 px-4 sm:ml-36 relative animate-slidedown'>
                <label className=' text-xl font-bold text-white absolute top-4 left-4' htmlFor='Message'>Message:</label>
                <input type="text"  name='Message' id='Message' className='flex px-10 flex-wrap p-20 bg-transparent w-[35vw] mt-12 z-10'/>
                <input type='submit' className=' cursor-pointer hover:bg-opacity-50 text-xl font-bold text-white bg-textcolor absolute bottom-0 right-0 rounded-2xl p-3'/>
            </div>
        </form>
        <div className='w-[370px] h-[370px] rounded-full absolute blurpurple md:left-80 left-32 top-32  '></div>
    </div>
  )
}

export default Contactpage