import React, { useState } from 'react'

import SecHeader from './SecHeader';

const Experience = () => {
  const [selected, setSelected] = useState(0);
  const e = [
    {title:'Industrial Engineering', fromTo: 'September 2017 - July 2020', text: "I started my programming carreer by studying Industrial Engineering (Computer Science) at the University of Ghent. Here I learned a lot about Computers, but also about myself. For example, that I'm not good at studying. I prefer doing practical things, so I switched to Computer Applications at HOGENT"},
    {title:'Computer Applications', fromTo: 'September 2020 - Present', text: "Right now, I'm in my third and final year of Computer Applications - Mobile & Enterprise Dev. This study is a lot more practical than Industrial Engineering, perfect for someone like myself. I hope to have my diploma by the end of july, and start working shortly after that."},
    {title:'Experience nr. 3', fromTo: 'Future - Future', text: "I hope to fill these spots with experiences later on in life, maybe you can help me with this!"},
    {title:'Experience nr. 4', fromTo: 'Future - Future', text: "I hope to fill these spots with experiences later on in life, maybe you can help me with this!"},
    {title:'Experience nr. 5', fromTo: 'Future - Future', text: "I hope to fill these spots with experiences later on in life, maybe you can help me with this!"},
  ];
  return (
    <section id='experience' className='h-[24rem] md:h-full'>
      <SecHeader title="Experience" />
      <div className='md:flex text-justify w-max mx-auto my-12'>
        <div className='flex flex-nowrap overflow-x-auto md:block w-60 md:w-48 md:ml-20 mx-auto border-y md:border-y-0'>
          {
            e.map((exp, i) => <div onClick={() => setSelected(i)} className={`text-sm px-2 py-5 border-l-2 cursor-pointer hover:bg-tertiary ${i===selected?'pl-4 text-text border-text bg-tertiary font-bold':'border-secondary'} easer`}>{exp.title}</div>)
          }
        </div>
        <div className='px-2 md:px-5 py-2 max-w-sm md:max-w-none'>
          <div className='ml-12'>
            <h1 className='text-xl md:text-2xl'>{e[selected].title}</h1>
            <span className='italic text-xs md:text-sm'>{e[selected].fromTo}</span>
          </div>
          <p className='md:max-w-xl text-sm md:text-md mx-12 mt-5'>{e[selected].text}</p>
        </div>
      </div>
    </section>
  )
}

export default Experience