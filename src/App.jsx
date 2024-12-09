import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './view/Home'


function App() {
 

  return (
    <>
    <div>
  
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
