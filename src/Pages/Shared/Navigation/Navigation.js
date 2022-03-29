import React from 'react';
import logo from '../../../images/logo.png'
import './Navigation.css'
import { NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth/useAuth';
import useFirebase from '../../../hooks/useFirebase/useFirebase';




const Navigation = () => {
  const{user, logout}=useFirebase()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand d-flex justify-content-center align-items-center fs-3 fw-bold text-success" href="/"><img className="logo" src={logo} alt="" /> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  to="/home" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" className="nav-link">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blog" className="nav-link">Blog</NavLink>
        </li>
      </ul>
      <div className="d-flex">     
        
      {
        user?.email ?
            <div className=" d-flex justify-content-center align-items-center w-100">

              <span>Hello <span className="fw-bold text-info">{user.displayName}</span> </span>
              <div className=""><img className="rounded-circle user-pic" src={user.photoURL} alt="" /></div>    
              <button onClick={logout} className="text-success  border-0 btn-lg btn-outline-danger" >Logout</button>

            </div>
            :
            <NavLink to="/login">
                <button className="btn btn-lg btn-outline-info">Login</button>
            </NavLink>
        }
               
      </div>
    </div>
  </div>
</nav>
    );
};

export default Navigation;