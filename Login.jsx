import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div className="wrapper">
    <div  className="pad">
      <h1 className="c">Login</h1>
      <input type="text" className="pass" placeholder="username" required />
      <span>
        <i class="fa fa-user" aria-hidden="true"></i>
      </span>
      <br />
      <br />
      <input type="password" className="pass" placeholder="password" required />
      <br />

      <div className="">
        <label className="c">
          <input type="checkbox" required />
          Remember Me{" "}
        </label>
        <label className="space"></label>
        <a href="#" className="f">
          {" "}
          Forget Password?
        </a>
      </div>
      <button type="submit" className="pass">
        
      <Link to='/Home'>Login</Link>
      </button>
      <div className="">
        <p className="s">Don't have an account?</p>
        <Link to='/Signup'>Signup</Link>
      </div>
    </div>
    </div>
  );
}
