import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
// import Header from "./components/Header";
// import Blogs from "./components/Blogs";
// import Pagination from "./components/Pagination";
import Home from "./pages/Home";
import Tagpage from "./pages/Tagpage";
import CategoryPage from "./pages/CategoryPage";
import {Routes,Route, useSearchParams, useLocation} from 'react-router-dom'
import Blogpage from "./pages/Blogpage";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  const[searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();

  

  useEffect(() => {

    //here double question mark mean either you get value else store 1
    const page = searchParams.get("page") ?? 1;

    //to check if tag is present or not in URL locaiton
    if(location.pathname.includes("tags")){
      //from url we are accessing last part 
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page,tag));
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null, category);
    }
    else{
      fetchBlogPosts(Number(page));
    }

  },[location.pathname,location.search]);

  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* here semicolon before blogId and others means after blog,tag,categories page 
        whatever is there in url is considered as blogId , category and tag*/}
        <Route path="/blog/:blogId" element={<Blogpage/>}/>
        <Route path="/tags/:tag" element={<Tagpage/>}/>
        <Route path="/categories/:category" element={<CategoryPage/>}/>
      </Routes>
  );
}
