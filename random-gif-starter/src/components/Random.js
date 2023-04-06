import { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from "./Spinner";

export default function Random() {

  //we are accessing .env file
  const API_KEYS = process.env.REACT_APP_GIPHY_API_KEY;

  const [gif,setGif]=useState("");

  const[loading,setLoading] = useState("false");
  

  function clickHandler(){
    fetchData()
  }

  async function fetchData(){
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEYS}`;
    let output= await axios.get(url);
    output=output.data.data.images.downsized_large.url;
    setGif(output);
    setLoading(false);
  }
  
  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className=" w-1/2   bg-green-500 rounded-md border border-black
    flex flex-col items-center gap-y-5 mt-[15px]">

      <h1 className="font-bold text-2xl underline uppercase mt-[15px]">Random Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
      }

      <button onClick={clickHandler} className=" mb-[20px] w-10/12 bg-green-200 rounded-md text-lg py-2 hover:bg-red-400">
        Generate
      </button>

    </div>
  )
}
