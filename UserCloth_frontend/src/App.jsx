import { useState } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import WomenCloth from './pages/WomenCloth';
import MenCloth from './pages/MenCloth';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import ProtectRoute from './components/ProtectedRoute';
import Cart from './pages/Cart';
import { useEffect } from "react";
import { useDispatch } from "react-redux"; 
import { getCurrentUser } from "./reduxStore/AllFeatureSlice/AuthSlice"
import Wishlist from './pages/WishList';
function App() {
 const dispatch = useDispatch();

useEffect(() => {

  dispatch(getCurrentUser());

}, []);

  return (
   <>
    <Navbar/>
      <div className="min-h-screen flex flex-col">
    <Routes>
     <Route path="/" element={<Home/>} />
      <Route path="/women" element={
        <ProtectRoute>
         <WomenCloth/>
       </ProtectRoute>
         } />
      <Route path="/men" element= { 
        <ProtectRoute> 
          <MenCloth/>
         </ProtectRoute>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/signup" element={<Signup/>}/>
     
      <Route  path="/about" element={<About/>} />
      <Route  path="/contact"element={<Contact/>} />
    <Route path="/cart" element= { 
        <ProtectRoute> 
          <Cart/>
         </ProtectRoute>} /> 
             <Route path="/wishlist" element ={
              <ProtectRoute> 
          <Wishlist/>
         </ProtectRoute>
             }/>
    </Routes>


  <Footer/>
  </div>
   </>
  )
}

export default App
