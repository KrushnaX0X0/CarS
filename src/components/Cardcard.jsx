import React from 'react'

function Cardcard({car,index}) {
  const {carPictureUrl,carName,ownerName,price} = car
  return (
    <div key={index} className='h-72 w-72 bg-slate-300  '>

      <div className='h-32 w-full bg-red-400 flex justify-center items-center'>  
        <div className='h-28 w-28 rounded-md overflow-hidden '>
          <img src={carPictureUrl} className='h-full w-full object-fill mask mask-squircle' alt="" />
        </div>
        
      </div>
       

    </div>
  )
}

export default Cardcard