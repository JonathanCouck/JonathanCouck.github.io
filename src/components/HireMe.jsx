import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import SecHeader from './SecHeader'

const HireMe = () => {
  const [sent, setSent] = useState('false');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_atyow3h', 
        'template_zl9ivuq', 
        form.current, 
        'zS105_6YutEc5OvSu'
      )
      .then(
        (result) => {
          setSent('true')
        },
        (error) => {
          setSent('failed')
        }
      )
  }

  return (
    
    <section id='hireMe'>
      <SecHeader title="Hire me!" />
      <div className='md:grid md:grid-cols-5 mt-12 pb-40 mx-12 md:mx-20 space-y-10'>
        <span className='col-span-3 my-auto text-lg'>
          Are you looking for a nice, clean website with front-end, and maybe a back-end as well? <br/> Contact me through one of the links on the bottom left of the screen, or send an email through this form, and I'll contact you back as soon I can!
        </span>
        <form ref={form} onSubmit={sendEmail} className='col-span-2 bg-secondary p-5 rounded-lg border-2 border-text space-y-5'>
          <div className='flex flex-col'>
            <label className='mr-5'>Name</label>
            <input type="text" name="user_name" className='rounded-lg shadow-box px-2 py-1 text-secondary' />
          </div>

          <div className='flex flex-col'>
            <label className='mr-5'>Email</label>
            <input type="email" name="user_email" className='rounded-lg shadow-box px-2 py-1 text-secondary' />
          </div>

          <div className='flex flex-col'>
            <label className='mr-5'>Message</label>
            <textarea name="message" rows={6} className='rounded-lg shadow-box px-2 py-1 text-secondary' />
          </div>
          <input type="submit" value="Send" className='nav-style hover:cursor-pointer w-full bg-tertiary py-2 rounded-lg border-2 border-text mb-5'/>

          <span>
            {sent==='true'?'Email sent! Thanks in advance!':sent==='failed'?'Email failed! Maybe try again later, or use a different method of contact.':null}
          </span>
        </form>
      </div>
       
    </section>
  )
}

export default HireMe