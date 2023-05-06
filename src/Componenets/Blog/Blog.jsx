import React from 'react'
import profilepage from './blog.module.scss';
import star from '../images/icon/star.svg';
//states
// import { useState } from 'react';
function Blog() {

  // const [color,setcolor]=useState(false);

  // function clickme() {
  //   setcolor(!color)
  // }

  return (
     <div className={profilepage.blog} >
     <div className={profilepage.miBox} > 
     <h2 className='title'>Profile</h2>
   <div>
    <img src={star} alt="star" />
   </div>
     </div>
   
   {/* <h1 className={color ? profilepage.active : profilepage.darck}>Hello world</h1>

     <button onClick={clickme} >Clickme</button>  */}
    
   </div>
  )
}

export default Blog
