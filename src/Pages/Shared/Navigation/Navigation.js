import React from 'react';
import logo from '../../../images/logo.png'
import './Navigation.css'
import { NavLink } from 'react-router-dom';



const Navigation = () => {
  
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
          <NavLink to="/shop" className="nav-link">Courses</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/shop" className="nav-link">Blog</NavLink>
        </li>
      </ul>
      <div className="d-flex">     
        
        <NavLink to="/login">
            <button className="btn btn-lg btn-outline-info">Login</button>
        </NavLink>
        <NavLink to="/login">
            <button className="btn btn-lg btn-outline-primary">Logout</button>
        </NavLink>
               
      </div>
    </div>
  </div>
</nav>
    );
};

export default Navigation;