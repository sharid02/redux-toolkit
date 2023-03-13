import { BrowserRouter, Routes , Route } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Cart from './pages/Cart'
import Home from './pages/Home'

function App() {

  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
