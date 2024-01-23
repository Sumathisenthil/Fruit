
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './component/pages/Home';
import './component/pages/Review.css'
import About from './component/pages/About';
import Product from './component/pages/Product';
import Review from './component/pages/Review';
import React from 'react';
import Contact from './component/pages/Contact';
import "./component/pages/Contact.css";
import './component/pages/Abount.css';
import './component/pages/Home.css';
//import Footer from './component/Footer';
import './component/Footer.css';
//import Login from './component/Login';
import SignIn from './component/SignIn';
import './component/pages/Product.css';
import SignUp from './component/SignUp';
import Dashboard from './component/Dashboard.jsx';
 export default function App() {
  return (   
    <div className="App">
    <BrowserRouter>
      <Routes>
         <Route index path='/' element={<Home/>}/>  
         <Route path='/home' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/product' element={<Product/>}/>
         <Route path='/review' element={<Review/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/signIn' element={<SignIn/>}/>
         <Route path='/signUp' element={<SignUp/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
         
         
         
         
      </Routes>
      </BrowserRouter>

    </div>
  );
}