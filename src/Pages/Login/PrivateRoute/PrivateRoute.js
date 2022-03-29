import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase/useFirebase';


const PrivateRoute = ({ children, ...rest }) => {
    let {user} = useFirebase();
    let location = useLocation();
    if(user.email){
      return children
    }
    return <Navigate to="/login" state={{from: location}} />;
};

export default PrivateRoute;