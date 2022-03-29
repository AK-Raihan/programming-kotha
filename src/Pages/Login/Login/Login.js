import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate,  } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';
import useFirebase from '../../../hooks/useFirebase/useFirebase';



const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, signInGoogle, loginUser, authError, isLoading } = useFirebase();

    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogle = ()=>{
        signInGoogle(location, navigate)
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    console.log(loginData);

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, navigate, location);
        e.preventDefault();
    }
    return (
        <div style={{marginBottom:'300px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 mt-5 text-center">
                    <h3>Login form</h3>
                        <button onClick={handleGoogle} className='btn btn-outline-success w-100'>Continue With Google</button>
                        <p className='fw-bold'>---------------------or-----------------------</p>
                        <form onSubmit={handleLoginSubmit}>
                            <input onBlur={handleOnBlur} name="email" className='form-control my-3' type="email" placeholder='Email' />
                            <input onBlur={handleOnBlur} name="password" className='form-control my-3' type="password" placeholder='Password' />
                            <input className='btn btn-dark w-100 btn-outline-secondary text-white' type="submit" value="Login" />
                            <NavLink
                            to="/register">
                            <p className=' mt-3'>New User? Please Register</p>
                        </NavLink>

                        {isLoading && <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>}
                        {authError && <alert alert >{authError}</alert>}
                        </form>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;