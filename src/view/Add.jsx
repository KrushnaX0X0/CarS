import React from 'react'
import Inpute from '../components/Inpute'
import Button from '../components/Button'
import Car from '../assets/car.png'
function Add() {
  return (
    <div className='mt-24'>
        <div className=''>
            <img src={Car} alt="" className='h-20  block m-auto'/>
        </div>
    <div className='h-80 w-80 text-center bottom-0 border-2 block m-auto bg-slate-200 rounded-lg'>
        <div className=' flex justify-center flex-col items-center h-full w-full'>
        <Inpute text='text' placeholder='Enter Your Img Url'/>
        <Inpute text='text' placeholder='Enter Your Car Name'/>
        <Inpute text='text' placeholder='Enter Your Owner Name'/>
        <Inpute text='text' placeholder='Enter Your Price'/>
       <span className='mt-3'><Button title='Add Car' /></span> 
        </div >  
        
    </div>
    </div>
  )
}

export default Add