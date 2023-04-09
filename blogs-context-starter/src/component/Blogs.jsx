import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Card from './Card'
import Spinner from './Spinner';

function Blogs() {
    //consume context
    const {loading,post} = useContext(AppContext);
    console.log(post)
  return (
    <div className='w-11/12 max-w-[630px] pt-20 pb-20'>
        {
            loading?

            (<Spinner/>):
            (post.length === 0 ? 
            (<div>No post Found</div>):
            (post.map((p)=>(<Card post={p} key={p.id}/>))) )
        }
    </div>
  )
}

export default Blogs