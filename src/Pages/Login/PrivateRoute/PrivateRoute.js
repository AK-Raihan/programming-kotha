import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase/useFirebase';



const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useFirebase();
    console.log(user);
    const location = useLocation();
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;