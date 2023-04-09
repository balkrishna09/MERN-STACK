// import React, { useContext } from 'react'
// import { AppContext } from '../context/AppContext'



function Card({post}) {
    // const {post} = useContext(AppContext)

  return (
    <div key={post.id} className="pt-8">
        <h2 className="font-bold text-[18px]">{post.title}</h2>

        <p className="text-[15px] pt-1">
            By <span className="italic">{post.author}</span> on <span className=" underline font-semibold">{post.category}</span>
        </p>

        <p className="text-[15px]">Posted on {post.date}</p>

        <p className="text-md tracking-wide pt-3">{post.content}</p>

        <div className="flex gap-2">
            {post.tags.map((tag,index)=>{
                return (
                    <span key={index} className=" text-blue-600 underline text-xs font-semibold">#{tag}</span>
                )
            })}
        </div>
    </div>
  )
}

export default Card