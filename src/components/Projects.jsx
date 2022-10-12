import React, { useState } from 'react';
import { FiLink2 } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';

import SecHeader from './SecHeader';

const ProjectMd = ({title, picSrc, text, fGit, bGit, website, showAll, i}) => {
  return (
    <div className={`easer card hover:scale-[1.04] easer rounded-[2rem] shadow-2xl h-[32rem] max-w-[26rem] ${(i>=2&&!showAll)?'hidden':null}`}>
      <img src={picSrc+".png"} alt={title} className='rounded-2xl h-[12rem] w-full'/>
      <div className='m-5 h-[18rem]'>
        <h1 className='font-bold mb-5 text-big'>{title}</h1>
        <div className='text-justify h-[11rem]'>{text}</div>
        <div className='flex justify-between'>
          {website?<a href={website} target="_blank" rel="noreferrer" className='nav-style flex text-sm p-0 px-2'><FiLink2 size={25} className='mr-1 my-auto'/> <span className='my-auto'>Website</span></a>:null}
          {fGit?<a href={fGit} target="_blank" rel="noreferrer" className='nav-style flex text-sm p-0 px-2'><AiFillGithub size={25} className='mr-1 my-auto'/> <span className='my-auto'>Front-end</span></a>:null}
          {bGit?<a href={bGit} target="_blank" rel="noreferrer" className='nav-style flex text-sm p-0 px-2'><AiFillGithub size={25} className='mr-1 my-auto'/> <span className='my-auto'>Back-end</span></a>:null}
        </div>
      </div>
    </div>
  )
}

const ProjectSm = ({title, picSrc, text, fGit, bGit, website, showAll, i, opened, setOpen}) => {
  return (
    <div className={`easer border grid grid-cols-2 p-2 ${opened?'bg-tertiary':'bg-secondary'} ${(i>=2&&!showAll)?'hidden':null}`}>
      <img onClick={setOpen} src={picSrc+".png"} alt={title} className='easer rounded-2xl p-2 h-20 hover:scale-[1.04] hover:cursor-pointer'/>
      <div>
        {title}
        <div className='flex flex-wrap mt-2'>
          {website?<a href={website} target="_blank" rel="noreferrer" className='nav-style text-small flex p-0 px-2'><FiLink2 size={15} className='mr-1 my-auto'/> <span className='my-auto'>Web</span></a>:null}
          {fGit?<a href={fGit} target="_blank" rel="noreferrer" className='nav-style text-small flex p-0 px-2'><AiFillGithub size={15} className='mr-1 my-auto'/> <span className='my-auto'>FE</span></a>:null}
          {bGit?<a href={bGit} target="_blank" rel="noreferrer" className='nav-style text-small flex p-0 px-2'><AiFillGithub size={15} className='mr-1 my-auto'/> <span className='my-auto'>BE</span></a>:null}
        </div>
      </div>
      {opened?<div className='relative col-span-2'>{text}</div>:null}
    </div>
  )
}

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [open, setOpen] = useState(0);

  const data = [
    {
      title: 'Poker Tracker',
      picSrc: 'https://imgur.com/I8lukzH',
      text: 'For my very first React/NodeJS-application, I created a website which tracks the results you get playing poker.',
      website: 'https://jonathancouck.github.io/frontendweb-poker-tracker/',
      fGit: 'https://github.com/JonathanCouck/frontendweb-poker-tracker',
      bGit: 'https://github.com/HOGENT-Web/webservices-thomas-2122-JonathanCouck',
    },
    {
      title: 'Mercurius',
      picSrc: 'https://imgur.com/SbJXaUm',
      text: `I am the webmaster of the student association Mercurius Aalst and was in charge of creating their new and improved website. There were not enough uses for a back-end.`,
      fGit: 'https://github.com/JonathanCouck/mercurius-aalst',
      website: 'https://mercurius-aalst.be/',
    },
    {
      title: 'HoySpain',
      picSrc: 'https://imgur.com/c0o6Q3c',
      text: 'We created the front- and back-end for a webapplication similar to AirBnb using React. This was done for a school project with a customer, and scored a 14/20.',
      fGit: 'https://github.com/HoGentProjectenII/2022-frontend-aalst1',
      bGit: 'https://github.com/HoGentProjectenII/2022-backend-aalst1',
    },
    {
      title: 'Portfolio-website',
      picSrc: 'https://imgur.com/0LnEnN2',
      text: 'This exact website! I decided it would be fun to have a cool website act as my resume. This website was also created in React.',
      website: '',
      fGit: 'https://github.com/JonathanCouck/portfolio-website',
    },
  ]

  return (
    <section id='projects'>
      <SecHeader title="Projects" />
      <div className='hidden md:flex flex-wrap easer justify-center mx-20 my-12'>
        {data.map((d, i) => <ProjectMd {...d} key={d.title} showAll={showAll} i={i} />)}
      </div>
      <div className='block md:hidden m-12 '>
        {data.map((d, i) => <ProjectSm {...d} key={d.title} showAll={showAll} i={i} opened={open===i} setOpen={() => setOpen(i)} />)}
      </div>
      <div className='m-12 md:mx-20 md:my-12'>
        <button onClick={() => setShowAll(!showAll)} className='card easer py-2 m-0 hover:scale-[1.04] w-36'>
          Show {showAll?'less':'more'}
        </button>
      </div>
    </section>
  )
}

export default Projects