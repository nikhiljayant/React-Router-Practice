import React from 'react'
import { Navigate } from 'react-router-dom';

// so that the user can only see the dashboard when logged in, else returned to login page

const PrivateRoute = ({ isLoggedIn, children }) => {
    if (isLoggedIn) {
        return children;
    } else {
        <Navigate to="/login" />
    }
}

export default PrivateRoute