import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext } from 'react'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Fruits from './components/Fruits'
import Vegetables from './components/Vegetables'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Search from './components/Search'

export const cartArrayContext = createContext();

function App() {
  const [cartArray,setCartArray] = useState([]);
  const [cartValue,setCartValue] = useState();
  const [searchItem,setSearchItem] = useState("");
  const value = {
    "cartArray" : cartArray,
    "setCartArray" : setCartArray,
    "cartValue" : cartValue,
    "searchItem" : searchItem,
    "setSearchItem" : setSearchItem
  }
  return (
    <>
    <cartArrayContext.Provider value={value} >

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/Fruits' element={<Fruits/>}/>
          <Route path='/Vegetables' element={<Vegetables/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Search' element={<Search/>}/>
          <Route path='/Cart' element={<Cart setCartValue={setCartValue} />}/>
        </Routes>        
        <Footer/>
      </BrowserRouter>

    </cartArrayContext.Provider>


    </>
  )
}

export default App