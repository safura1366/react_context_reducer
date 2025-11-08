import React from "react";
import { use } from "react";
 const fetchPosts= fetch("https://jsonplaceholder.typicode.com/posts;;")
 .then((res)=>{
    if(!res.ok) throw new Error('Faild to feach post')
        return res.json()
  })
export default function () {
   const posts= use(fetchPosts)
  return (
    <div>
      <ul>
        { posts.map((post)=>(<h3 key={post.id}>{post.title}</h3>))}
      </ul>
    </div>
  );
}
