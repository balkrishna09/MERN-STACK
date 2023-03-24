import React, { useEffect, useState } from "react";
import NavBar from "./components/Navbar";
import Cards from "./components/Cards"
import Filter from "./components/Filter"
import { apiUrl,filterData } from "./data";
import {toast} from  "react-toastify";
import Spinner from "./components/Spinner"
// import { Toast } from "react-toastify/dist/components";
// import { ReactDOM } from "react-dom/client";

const App = () => {

  const[courses,setCourses] = useState(null);
  const[loading,setLoading]= useState(true);

  async function fetchData(){
    setLoading(true);
    try{
      let result = await fetch(apiUrl);
      let output = await result.json();
      setCourses(output.data);
    }

    catch(error){
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  // const []=
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="bg-bgDark2">
        <Filter filterData = {filterData}/>
        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]">
        {loading?(<Spinner/>):(<Cards courses={courses}/>)}
      </div>
      </div>
      {/* <Cards courses = {courses}/> */}

      
    </div>
  );
};

export default App;
