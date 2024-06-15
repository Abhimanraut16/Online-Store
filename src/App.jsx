import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Product from './component/Product'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetail from './component/ProductDetail'
import SearchItem from './component/SearchItem'
import Cart from './component/Cart'
import { Route, Routes } from 'react-router-dom'
import { items } from './component/Data'
import Logo from './component/Logo/Logo'
import Header from './component/Header/Header'
import SIdeMenu from './component/SideMenu/SIdeMenu'
import Section from './component/Section'
import Footer from './component/Footer/Footer'



function App() {
  const [data, setData] = useState([...items])
  return (
    <div>
      

      <Header />
      <Logo />
      <SIdeMenu />
      <Section />
    
      <Footer />


      {/* <Navbar /> */}
      {/* <Routes>
          <Route path='/' element={<Product items={data} />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/search/:term' element={<SearchItem />} />
          <Route path='/cart' element={<Cart />} />

        </Routes> */}
      {/* <Product /> */}



    </div>
  )
}

export default App