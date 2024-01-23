import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Math() {
    const Sum = () => {
        const navigate = useNavigate();
      
        const handleClickHome = () => {
          navigate("/");
        };
      
        const handleClickAbout = () => {
          navigate("/About");
        };
        const handleClickProduct = () => {
          navigate("/Product");
        };
        const handleClickReview = () => {
          navigate("/Review");
        };
        const handleClickContact = () => {
          navigate("/Contact");
        };
        const handleClickSignIn = () => {
          navigate("/SignIn");
        };
        const handleClickDashboard = () => {
          navigate("/Dashboard");
        };
        const handleClickInventory = () => {
          navigate("/Inventory");
        };
        const handleClickOrders = () => {
          navigate("/Orders");
        };
        const handleClickCustomers = () => {
          navigate("/Customers");
        };
        const handleClickChart = () => {
          navigate("/Chart");
        };
        return (
          <div>
            <button onClick={handleClickHome}>Home</button>
            <button onClick={handleClickAbout}>About</button>
            <button onClick={handleClickProduct}>Product</button>
            <button onClick={handleClickReview}>Review</button>
            <button onClick={handleClickContact}>Contact</button>
            <button onClick={handleClickSignIn}>SignIn</button>
            <button onClick={handleClickDashboard}>Dashboard</button>
            <button onClick={handleClickInventory}>Inventory</button>
            <button onClick={handleClickOrders}>Orders</button>
            <button onClick={handleClickCustomers}>Customers</button>
            <button onClick={handleClickChart}>Chart</button>
          </div>
        );
      };
  
}

/*import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <a href='#' className='brand'>
        <span className='te'>jsiadoe</span>
      </a>
      <ul className='side-menu top'>
        <li>
            <a href='#'>
                <i class="fa fa-tachometer" aria-hidden="true"></i>
            <span className='te'>jsiadoe</span>
            </a>
        </li>
      </ul>
    </div>
  )
}*/

