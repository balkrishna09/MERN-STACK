import Header from "./component/Header";
import Blogs from "./component/Blogs";
import Footer from "./component/Footer";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import './App.css'

export default function App() {

  const {fetchBlog} = useContext(AppContext);

  useEffect(()=>{
    fetchBlog();
  },[]);
  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">

      <Header/>
      <Blogs/>
      <Footer/>
    </div>
  );
}
