import React from 'react';
import homepage from './home.module.scss';
import star from '../images/icon/star.svg';
function Home() {
  return (
    <div className={homepage.Home}>
      <div className={homepage.minBox}> 
      <h2 className='title'>Home</h2>
    <div>
     <img src={star} alt="star" />
    </div>
      </div>
    </div>
  )
}

export default Home
