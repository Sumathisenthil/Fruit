import React from 'react';
import Sum from '../Math';
import '../App.css';
//import Mass from './Logo';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <Sum/>
      <nav class="navbar navbar-nav navbar-expand-lg navbar-light bg-white py-3 shadow-sm" style={{
        position:'fixed',
        zIndex:999,
        width:'100%'
      }}>
  <div class="container" >
    <img src='https://i.ibb.co/q1NbNg1/logo-removebg-preview.png' className='hello'></img>
    <h1>Fresh Fruit</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><i class="fa fa-list" aria-hidden="true"></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
           <Link to='/home'>Home</Link>
        </li>
        <li class="nav-item" style={{
          paddingLeft:'10px' 
        }}>
        <Link to='/about'>About</Link>
        </li>
        
        <li class="nav-item" style={{
          paddingLeft:'10px'
        }}>
        <Link to='/product'>Product</Link>
        </li>
        <li class="nav-item" style={{
          paddingLeft:'10px'
        }}>
        <Link to='/review' style={{
          paddingLeft:'10px'
        }}>Review</Link>
        </li>
        <li class="nav-item">
        <Link to='/contact' style={{
          paddingLeft:'10px'
        }}>Contact</Link>
        </li>
        <li class="nav-item">
        <Link to='/dashboard' style={{
          paddingLeft:'10px'
        }}>Dashboard</Link>
        </li>
      </ul>
      <div className="buttons">
         <a href="" className="btn btn-outline-dark ms2">
         <i className="fa fa-sign-in me-1"></i> <Link to='/signIn' style={{
                  textDecoration:'none',
                  color:'black',
                }}>Login</Link></a>
         <a href="" className="btn btn-outline-dark ms-2">
         <i className="fa fa-shopping-cart me-1"></i> cart(0)</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  );

}
