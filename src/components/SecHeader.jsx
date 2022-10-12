import React from 'react'

const SecHeader = ({title}) => {
  return (
    <div className='m-12 text-vbig font-bold space-y-2 mb-12'>
      <h1>{title}</h1>
      <hr className='border' />
    </div>
  )
}

export default SecHeader