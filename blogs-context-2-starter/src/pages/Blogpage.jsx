import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import BlogDetails from './BlogDetails';
import { useEffect } from 'react';
import { baseUrl } from '../baseUrl';

function Blogpage() {

  const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
  const [blog,setBlog] = useState(null);
  const[relatedblogs, setRelatedblogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const {setLoading,loading} = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs(){
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try{
      const response = await fetch(url);
      const data = await response.json();
      setBlog(data.blog);
      setRelatedblogs(data.relatedBlogs);
    }
    catch(e){
      console.log("ERORRRRRRRRRRRRR");
      setBlog(null);
      setRelatedblogs([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    if(blogId){
      fetchRelatedBlogs();
    }
  },[location.pathname])


  return (
    <div>
      <Header/>
      <div>
            <button onClick={()=> navigation(-1)} className='pt-20'>
                Back
            </button>
      </div>
        {loading ? (<p>Loading</p>) :
        blog ? (
          <div >
            <BlogDetails post={blog}/>
            <h2> Related Blogs</h2>
            {
              relatedblogs.map((post) => (
                <div key = {post.id}>
                  <BlogDetails post={post}/>
                </div>
              ))
            }
          </div>
        ): (
          <div>
            <p>No blog Found</p>
          </div>
        )}
    </div>
  )
}

export default Blogpage