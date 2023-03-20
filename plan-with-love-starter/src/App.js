import React from "react";
import data from './data';
import {useState} from 'react';
import Tours from "./components/Tours";

const App = () => {

  const [tours,setTours] = useState(data);
  
  return(
  <div>
    <h2> Plan with Love</h2>
    <Tours tours={tours}></Tours>
  </div>
  )
};

export default App;
