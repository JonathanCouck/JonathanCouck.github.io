import React from 'react'
// import { BsArrowRight } from 'react-icons/bs'
import logo from '../photos/Logo.png';

const Header = () => {
  return (
    <header id='header' className="flex bg-primary shadow-lg fixed w-screen z-10 px-5 py-2" >
      <div className='flex font-semibold'>
        <img src={logo} alt="Logo" className='h-10' />
        <a href='#aboutMe' className='nav-style text-xl md:text-2xl ml-2 my-auto'>Jonathan Couck</a>
      </div>
      <ul className='hidden md:flex space-x-2 items-center ml-10 mt-1'>
        <li><a href='#aboutMe' className='nav-style'>About me</a></li>
        <li><a href='#skills' className='nav-style'>Skills</a></li>
        <li><a href='#projects' className='nav-style'>Projects</a></li>
        <li><a href='#experience' className='nav-style'>Experience</a></li>
      </ul>
      <a href="#hireMe" className='nav-style ml-auto'><span className='italic'> Hire me </span> →</a>
    </header>
  )
}

export default Header