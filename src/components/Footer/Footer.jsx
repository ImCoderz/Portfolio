import React from 'react';
import './Footer.css';
import logo from '../../assets/A.N.svg'
import {FaFacebook,FaInstagramSquare,FaLinkedin,FaGoogle} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__first'>
            <h1 className='text-xl font-extrabold text-white cursor-pointer bounce '><a href="/">Naama</a><span className='  text-orange-500'>.</span></h1>
            <ul className='flex justify-center gap-6 mt-5 items-center'>
              <li><a href='#'><FaFacebook  color='white' size={27}/></a></li>
              <li><a href='#'><FaInstagramSquare color='white' size={27}/></a></li>
              <li><a href='#'><FaLinkedin color='white' size={27}/></a></li>
              <li><a href='#'><FaGoogle color='white' size={27}/></a></li>
          </ul>
        </div>
        
        <footer className="footer__second">
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
        </footer>
    </footer>
  )
}
