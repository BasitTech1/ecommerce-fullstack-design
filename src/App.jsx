import React from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar"
import Home from './Pages/Home';
import Footer from './Component/Footer';
import ProductList from './Pages/ProductList';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Placeorder from './Pages/Placeorder';
import Orders from './Pages/Orders';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:categoryId' element={<ProductList />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<Placeorder />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
