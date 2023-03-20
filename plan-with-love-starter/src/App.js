import React from "react";
import data from './data';
import {useState} from 'react';
import Tours from "./components/Tours";

const App = () => {

  const [tours,setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(t => t.id !== id);
    setTours(newTours);
  }

  if(tours.length===0){
    return (
    <div className="refresh">
        <h2>
          No tours found  
        </h2>
        <button onClick={()=>setTours(data)} className="btn-white">refresh</button>
    </div>
    );
  }
  
  return(
  <div className="App">
    <Tours tours={tours} removeTour={removeTour}></Tours>
  </div>
  )
};

export default App;
