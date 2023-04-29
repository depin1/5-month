import axios from "axios";
import { async } from "q";
import { useState,useEffect } from "react";

function ComponentB() {

const [post,setpost]=useState('posts');
const [data,setdata]=useState([]);
const [loading,setloading]=useState(false);

const fatchdata=async ()=>{
const response=await axios.get(`https://jsonplaceholder.typicode.com/${post}`)
setdata(response.data);
setloading(false)
console.log(response.data);
}
useEffect(()=>{
setloading(true)
fatchdata();
},[post])
if(loading){ return <h2>Loading...</h2> 
}
    return(
        <div>
            <button onClick={()=>setpost('posts')}>Posts</button>
            <button onClick={()=>setpost('todos')}>todos</button>
            <h1>{post}</h1>
   <div>
   {
                    data.map((fatch)=>(
<div key={fatch.id}>
<h2>{fatch.title}</h2>
</div>
                    ))
                }
   </div>
        </div>
    )
}

export default ComponentB;