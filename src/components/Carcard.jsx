import React from 'react'

function Carcard({car}) {
    const {carPictureUrl,ownerName,carName,price }= car
  return (
    <div className='h-56 w-48 bg-slate-200 shadow-xl   rounded-lg'>
        <div className='h-28 w-full flex justify-center items-center '>
            <div className='h-24 w-36   rounded-full  overflow-hidden '>
            <img src={carPictureUrl} className='h-full w-full object-fill'/>
        </div>
        </div>

        <div className='ml-2'>
            <p className='ml-2'> {carName}</p>
            <p className='ml-2'> <span className=' block'>ownerName :</span> {ownerName}</p>
            <p>Price : {price}</p>
        </div>



    </div>
  )
}

export default Carcard