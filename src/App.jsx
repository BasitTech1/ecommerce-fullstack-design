import React from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar"
import Home from './Pages/Home';
import Footer from './Component/Footer';
import ProductList from './Pages/ProductList';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:categoryId' element={<ProductList />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
