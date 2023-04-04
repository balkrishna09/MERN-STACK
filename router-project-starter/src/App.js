import "./App.css";
import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { useState } from "react";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return(
    <div>
      <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path = "/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/Dashboard" element = {<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App;
