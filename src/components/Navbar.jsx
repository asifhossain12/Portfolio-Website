import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import logo from "../assets/Asif-logo.jpg"

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href='/' aria-label='Home'>
                <img src= {logo} className='mx-2' width={75} height={66}
                alt='Logo'/>
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/asifhossain01/'
            target='blank'
            
            aria-label='Linkedin'>
                <FaLinkedin size={30} style={{ fill: 'black' }} />
            </a>

            <a href='https://github.com/asifhossain12'
            target='blank'
            
            aria-label='GitHub'>
                <FaGithub size={30} style={{ fill: 'black' }} />
            </a>

            <a href='https://www.instagram.com/_.asif_12/'
            target='blank'
            rel='noopener noreferrerer'
            aria-label='Instagram'>
                <FaInstagram size={30} style={{ fill: 'black' }} />
            </a>
        </div>
    </nav>
  )
}

export default Navbar;
