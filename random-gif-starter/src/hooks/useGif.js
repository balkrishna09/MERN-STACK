import { useState , useEffect } from "react";
import axios from "axios";


const useGif = (tag) => {

    
    const API_KEYS = process.env.REACT_APP_GIPHY_API_KEY;

    const random_url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEYS}`;

    const tag_url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEYS}&tag=${tag}`;
    

    const [gif,setGif]=useState("");
  
    const[loading,setLoading] = useState("false");

    async function fetchData(tag){
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEYS}&tag=${tag}`;
      let output= await axios.get(tag ? tag_url : random_url);
      output=output.data.data.images.downsized_large.url;
      setGif(output);
      setLoading(false);
    }
    
    useEffect(()=>{
      fetchData();
    },[]);

    return{gif,loading,fetchData}
  };

export default useGif;
