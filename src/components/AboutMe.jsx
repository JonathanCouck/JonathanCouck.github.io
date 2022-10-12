import React from 'react';
import pic from '../photos/Picture.png';

import SecHeader from './SecHeader';

const AboutMe = () => {

  const onBtnClick = () => {
      // using Java Script method to get PDF file
      fetch('CV_EN.pdf').then(response => {
          response.blob().then(blob => {
              // Creating new   object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'Couck_Jonathan_Resume.pdf';
              alink.click();
          })
      })
  }

  return (
    <section id='aboutMe'>
      <SecHeader title="About me" />
      <div className='flex flex-col md:grid md:grid-rows-auto md:grid-cols-[auto] gap-10 text-justify m-12 md:mx-20'>
        <div className='text-md md:text-2xl col-start-1'>
          <p>Hello there!</p>
          <p>My name is Jonathan Couck, and I'm pleased to welcome you to my very own portfolio-website!</p>
        </div>
        <div className='text-sm row-start-3 md:text-lg md:row-start-1 md:col-start-2 md:col-span-2 h-min'>
          <p>Hi! I'm Jonathan Couck and I enjoy creating things that live on the internet.</p>
          <p>I am a passionate Full Stack Web & Mobile Developer, currently in my final year of Applied Informatics at HOGENT Aalst. I am also the Webmaster for the Student Association of Mercurius.</p>
          <p>Outside of my computer related hobbies, I love playing guitar, and I am practically always listening to music.</p>
        </div>
        <img src={pic} alt="LeMe" className="row-start-2 md:col-span-3 md:w-3/5 mx-auto" />
        <button onClick={onBtnClick} className='nav-style mx-auto col-span-3 bg-secondary rounded-full border-2 border-text px-4 py-2'>
          Download my resume
        </button>
      </div>
    </section>
  )
}

export default AboutMe