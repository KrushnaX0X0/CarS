import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


///
import add from '../assets/add.png'
import Carcard from '../components/Carcard'

function Home() {

  const [cars, setcars] = useState([])
  const lodescars = async () => {

   try{ const response = await axios.get('http://localhost:3000/cars')

    setcars(response.data.data)
   }
   catch(error){
       console.error(error)
       
   }
   


  }

  useEffect(() => {
    lodescars()
  }, [])

  console.log(cars);
  return (
    
    <>
      <h1 className=' font-bold text-center text-4xl'>Your cars </h1>
    <div className='reletive h-full w-full flex gap-3 p-2'>
    
      {
        cars.map((car)=>{
          return(
          <>
           <Carcard car={car}/>
          </>
          )
        }) 
      }
      <Link to= '/add'>
      <img src={add} className='h-12 absolute bottom-10 right-16 cursor-pointer' />
      </Link>
    </div>
    </>
  )
}

export default Home