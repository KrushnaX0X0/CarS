import React from 'react'
import Button from './Button'

function Cardcard({ car, index }) {
  const { carPictureUrl, carName, ownerName, price } = car
  return (
    <div key={index} className='h-72 w-60 bg-slate-100 rounded-lg shadow-2xl relative '>

      <div className='h-32 w-full  flex justify-center items-center'>
        <div className='h-28 w-28 rounded-md overflow-hidden '>
          <img src={carPictureUrl} className='h-full w-full object-fill mask mask-squircle' alt="" />
        </div>
      </div>


      <div>
        <span className='p-2'>{carName}</span>
        <div className='ml-5'>
          <p>OwerName: {ownerName}</p>
          <p> Price : {price} </p>
        </div>
      </div>

      <div className='absolute bottom-9 right-9'>
        <Button title="More info" />

      </div>

    </div>
  )
}

export default Cardcard