import React from 'react'

import SecHeader from './SecHeader';

const Skill = ({name, perc}) => {
  return (
    <div className='flex text-sm bg-text border-2 border-text my-2 rounded-2xl'>
      <h1 className='bg-tertiary border-r-2 pl-2 w-28 rounded-l-2xl'>
        {name}
      </h1>
      <div className='flex w-4/5'>
        <div className='bg-secondary pr-5 text-right rounded-r-2xl' style={{width: `${perc}%`}}>
          {perc}%
        </div>
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <section id='skills'>
      <SecHeader title="Skills" />
      <div className='md:flex m-12 md:mx-20 md:my-12 md:space-x-5'>
        <div className='md:w-6/12 m-auto mb-10 md:mb-0'>
          <Skill name="HTML" perc={90} />
          <Skill name="CSS" perc={90} />
          <Skill name="JavaScript" perc={80} />
          <Skill name="React" perc={80} />
          <Skill name="MySQL" perc={80} />
          <Skill name="NodeJS" perc={75} />
          <Skill name="GIT" perc={80} />
          <Skill name="Java" perc={90} />
          <Skill name="Spring" perc={60} />
        </div>
        <div className='card m-auto md:80 mt-2'>
          <div className='text-xl font-bold mx-auto w-max'>Personal skills</div>
          <ul className='text-lg list-disc ml-5 mt-5'>
            <li>Problem solving</li>
            <li>Stress resistance</li>
            <li>Flexible</li>
            <li>Dealing with criticism</li>
            <li>Time management</li>
            <li>Persistence</li>
            <li>Decisiveness</li>
            <li>Social</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills