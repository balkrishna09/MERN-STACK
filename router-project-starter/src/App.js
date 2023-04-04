import "./App.css";
import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
// import { Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return(
    <div className="flex flex-col w-screen h-screen bg-richblack-900">
      <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path = "/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        {/* <Route path="/Dashboard"  element= {`${isLoggedIn ?<Navigate to="/dashboard"/> : <Navigate to="/login"/>}`} /> */}
          
    
        <Route path="/Dashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  )
}

export default App;
