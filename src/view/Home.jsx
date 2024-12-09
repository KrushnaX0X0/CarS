import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cardcard from '../components/Cardcard'
function Home() {
    const [cardata, setcardata] = useState([])
    const lodecar = async () => {

        try {
            const response = await axios.get('http://localhost:3000/cars')
            setcardata(response.data.data)
        }
        catch (error) {
            console.error('error', error)
        }

    }

    console.log(cardata)
    useEffect(() => {
        lodecar()
    }, [])
    return (
        <div className=' h-full w-full flex flex-wrap gap-4 p-2 justify-evenly' >
            {
                cardata.map((car, index) => {
                    return (
                        <div className=' '>
                      <Cardcard car={car} index={index}/>

                        </div>

                    )
                })
            }
        </div>
    )
}

export default Home