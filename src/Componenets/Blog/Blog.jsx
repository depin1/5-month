import React from 'react'
import profilepage from './blog.module.scss';
import star from '../images/icon/star.svg';
function Blog() {
  return (
     <div className={profilepage.blog} >
     <div className={profilepage.miBox} > 
     <h2 className='title'>Profile</h2>
   <div>
    <img src={star} alt="star" />
   </div>
     </div>
   </div>
  )
}

export default Blog
