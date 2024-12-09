import React from 'react'

function Button({title}) {
  return (
    <button className='h-8 w-24 bg-blue-500 text-white rounded-lg shadow-lg'>{title}</button>
  )
}

export default Button