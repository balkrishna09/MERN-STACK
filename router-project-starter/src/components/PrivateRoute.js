// import React, { Children } from 'react'
// import Dashboard from '../pages/Dashboard'
import { Navigate } from 'react-router-dom'
// import Login from '../pages/Login';

// Children means <Dashboard/>
export default function PrivateRoute({isLoggedIn, children}) {
    // const navigate = useNavigate();
  if (isLoggedIn){
    return children;
  }
  else{
    return <Navigate to="/login"/>
  }
}
