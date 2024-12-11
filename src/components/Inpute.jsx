import React from 'react'

function Inpute({text,placeholder,value,setvalue}) {
  return (
    <input type={text}
     placeholder={placeholder} 
     value={value} 
     onChange={(e)=>setvalue(e.target.value)} 
     className=' h-10 w-60 text-center block shadow-2xl border-4'/>
  )
}



export default Inpute