/*import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom';
function Sidebar() { 
  return (
    <div className='bg-white sidebar p-2' style={{
        position:'fixed',
        zIndex:1,
        top:0,
        left:0,
        overflowX:'hidden'
    }}>
    <div className='m-3'>
    
      <span className='brand-name fs-6 ' style={{
        fontWeight:'bold',
        fontFamily:'arial'

      }}>Artfull Creations</span>
    </div>
    <hr className='text dark'/>
    <div className='list-group list-group-flush'>
        <a className='list-group-item py-2'>
             <i className='bi bi-speedometer2 fs-5 me-2'></i> 
            <span className="fs-5">Dashboard</span>
        </a>
        <a className='list-group-item py-2'>
         <i className='bi bi-house fs-5 me-2'></i> 
            <Link to='/inventory' style={{
                textDecoration:'none',
                fontFamily:'sans-serif',
                fontSize:'20px',
            }}>Inventory</Link> 
        </a>
        <a className='list-group-item py-2'>
        <i className='bi bi-table fs-5 me-2'></i>
            <Link to='/orders' style={{
                textDecoration:'none',
                fontFamily:'sans-serif',
                fontSize:'20px',
            }}>Orders</Link>
            </a>
            <a className='list-group-item py-2'>
             <i className='bi bi-people fs-5 me-2'></i> 
            <Link to='/chart' style={{
                textDecoration:'none',
                fontFamily:'sans-serif',
                fontSize:'20px',
            }}>Chart</Link>
        </a>
        <a className='list-group-item py-2'>
            <i className='bi bi-people fs-5 me-2'></i> 
            <Link to='/Custromers' style={{
                textDecoration:'none',
                fontFamily:'sans-serif',
                fontSize:'20px',
            }}>Customers</Link>
        </a>
    </div>
    </div>
  )
}

export default Sidebar*/

/*import React from 'react'
import './Style.css';
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <ul>
        <li>
            <a href='/Dashboard'>
                <i class="fa fa-tachometer" aria-hidden="true"></i>
            <span className='te'>Dashboard</span>
            </a>
        </li>
        <li>
            <a href='/orders'>
                <i class="fa fa-first-order" aria-hidden="true"></i>
            <span className='te'>Orders</span>
            </a>
        </li>
        <li>
            <a href='/message'>
                <i class="fa fa-commenting" aria-hidden="true"></i>
            <span className='te'>Message</span>
            </a>
        </li>
        <li>
            <a href='/analytics'>
                <i class="fa fa-area-chart" aria-hidden="true"></i>
            <span className='te'>Analytics</span>
            </a>
        </li>
        <li>
            <a href='/settings'>
                <i class="fa fa-cog" aria-hidden="true"></i>
            <span className='te'>Settings</span>
            </a>
        </li>
        <li>
            <a href='/logout'>
                <i class="fa fa-sign-out" aria-hidden="true"></i>
            <span className='te'>Logout</span>
            </a>
        </li>
      </ul>
    </div>
    
  )
}*/
import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul style={{
        marginTop:'70px',
      }}>
        <li className='no' >
        <i class="fa fa-tachometer" aria-hidden="true"></i>
        <Link to='/dashboard' style={{
            textDecoration:'none',
            color: 'white',
           
        }}>Dashboard</Link>
        </li>
        <li className='no' >
        <i class="fa fa-first-order" aria-hidden="true"></i>
        <Link to='/orders' style={{
            textDecoration:'none',
            color: 'white',
            
        }}>Orders</Link>
        </li>
        <li className='no' >
        <i class="fa fa-area-chart" aria-hidden="true"></i>
        <Link to='/analytics' style={{
            textDecoration:'none',
            color: 'white',
           
        }}>Analytics</Link>
        </li>
        <li className='no' >
        <i class="fa fa-commenting" aria-hidden="true"></i>
        <Link to='/message' style={{
            textDecoration:'none',
            color: 'white',
        }}>Message</Link>
        </li>
        <li className='no' >
        <i class="fa fa-cog" aria-hidden="true"></i>
        <Link to='/setting' style={{
            textDecoration:'none',
            color: 'white',
        }}>Settings</Link>
        </li>
        <li className='no'>
        <i class="fa fa-sign-out" aria-hidden="true"></i>
        <Link to='/logout' style={{
            textDecoration:'none',
            color: 'white',
        }}>Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;