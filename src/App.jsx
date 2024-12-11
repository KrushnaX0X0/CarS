import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './view/Home'
import Add from './view/Add'


function App() {
 

  return (
    <>
    <div>
  
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
