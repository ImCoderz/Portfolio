import React from 'react'
import Card from './Card'
import Bare from './Bare'
import Snow from './Snow'
import basics from '../assets/basics.png'
import css from '../assets/css.webp'
import react from '../assets/react.png'
import database from '../assets/database.png'
import spring from '../assets/spring.png'
import git from '../assets/git.png'
import testing from '../assets/testing.png'
import node from '../assets/node.png'
import java from '../assets/java.png'
import Card2 from './Card2'

const Studiespage = () => {
  return (
    <div> 
      <div className=' flex flex-col lg:px-40 px-28 mt-20 gap-4 relative'>
        <h1 id='Studies' className='text-2xl font-bold text-white text-center pulse3'>Studies</h1>
        <h1  className='text-lg font-bold text-white text-center mt-6 '>Web Development</h1>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 place-items-center transition-all animate-slideup duration-100'>
            <Card2 picture={basics} title={"HTML, CSS, JS"} description={"Learning HTML, CSS, and JS was an exciting and fulfilling journey for me. By mastering these essential web technologies, i did gain the skills and knowledge necessary to build stunning and dynamic web pages and applications."}/>
            <Card2 picture={css} title={"Tailwind Css"} description={"After on i learned some css framework like boostrap, scss but i did choise Tailwind CSS as my CSS framework by investing my time into learning it, and setting myself up for success as a web developer."}/>
            <Card2 picture={react} title={"React Js"} description={"Learning React JS was an exciting and rewarding experience for me as a web developer. React's component-based architecture and virtual DOM make it a powerful and flexible library for building complex user interfaces with ease."}/>
            <Card2 picture={database} title={"MySQL, Firebase and Mongodb"} description={"Learning MySQL, Firebase, and MongoDB was a valuable addition to my skill set as a web developer. The three of them are a powerful relational database that allowed me to store and retrieve data efficiently."}/>
            <Card2 picture={node} title={"Node Js, Express Js"} description={"Learning Node JS and Express Js was a transformative experience for ,e as a web developer. Node's event-driven, non-blocking I/O model allowed me to build scalable and performant server-side applications with ease."}/>
            <Card2 picture={spring} title={"Spring Boot"} description={"Learning Spring Boot was a game-changer for me as a web developer. Spring Boot is a popular framework that provides a powerful and efficient way to build web applications in Java."}/>
        </div>
        <h1  className='text-lg font-bold text-white text-center '>Software Engineering</h1>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 place-items-center transition-all animate-slideup duration-100'>
            <Card2 picture={java} title={"Java"}/>
            <Card2 picture={git} title={"GIT, GITHUB"}/>
            <Card2 picture={testing} title={"Test"}/>
        </div>
        <div className='w-[500px] h-[500px] rounded-full absolute blurpurple md:left-[360px] left-32 top-32  '></div>
      </div>
    </div>
   
  )
}

export default Studiespage