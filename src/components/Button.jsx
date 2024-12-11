import React from 'react'

function Button({title,onclick}) {
  return (
    <button className='h-8 w-24 bg-blue-500 text-white rounded-lg shadow-lg' onClick={onclick}>{title}</button>
  )
}

export default Button