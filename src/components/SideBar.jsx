import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';

const SideBar = () => {
  return (
    <div className='fixed ml-1 bottom-0 w-min z-10'>
      <a href="https://github.com/JonathanCouck/" target="_blank" rel="noreferrer">
        <FiGithub size={30} className='nav-style p-1 m-1'/>
      </a>
      <a href="https://www.instagram.com/jcouck/" target="_blank" rel="noreferrer">
        <FiInstagram size={30} className='nav-style p-1 m-1' />
      </a>
      <a href="https://www.linkedin.com/in/jonathan-couck-2b1564172/" target="_blank" rel="noreferrer">
        <FiLinkedin size={30} className='nav-style p-1 m-1' />
      </a>
      <a href="mailto:jonathancouck@hotmail.be" target="_blank" rel="noreferrer">
        <FiMail size={30} className='nav-style p-1 m-1' />
      </a>
      <div className='border-l h-40 ml-5 mx-auto' />
    </div>
  )
}

export default SideBar