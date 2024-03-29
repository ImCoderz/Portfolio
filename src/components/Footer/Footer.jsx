import React from 'react';
import './Footer.css';
import logo from '../../assets/A.N.svg'
import {FaFacebook,FaInstagramSquare,FaLinkedin,FaGoogle} from 'react-icons/fa'
import Button from '../Download/Button';

export default function Footer() {
  return (
    <footer id='Contact' className='footer'>
        <div className='footer__first'>
            <h1 className='text-xl font-extrabold text-white cursor-pointer bounce '><a href="/">Naama</a><span className='  text-orange-500'>.</span></h1>
            <ul className='flex justify-center gap-6 mt-5 items-center'>
              <li><a href='https://www.facebook.com/abderrahmane.abdo.02' target='_blank'><FaFacebook  color='white' size={27}/></a></li>
              <li><a href='https://www.instagram.com/abderrahmane_naama/' target='_blank'><FaInstagramSquare color='white' size={27}/></a></li>
              <li><a href='https://www.linkedin.com/in/abderrahmane-naama-244149263/' target='_blank'><FaLinkedin color='white' size={27}/></a></li>
              <li><a href='mailto:naamaabderrahmane2002@gmail.com' target='_blank'><FaGoogle color='white' size={27}/></a></li>
          </ul>
        </div>
        <Button/>
        
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
