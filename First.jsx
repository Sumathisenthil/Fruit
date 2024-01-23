import React from 'react'
import Navbar from './Navbar'
import Review from './pages/Review'
import Footer from './Footer'
export default function First() {
  return (
    <>
    <div style={{marginTop:'0px'}}> <Navbar/>
    </div>
    <div><Review/></div>
     <div><Footer/></div> 
      
    </>
  )
}
