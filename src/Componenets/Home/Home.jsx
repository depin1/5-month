import React from 'react';
import homepage from './home.module.scss';
import star from '../images/icon/star.svg';
import img from '../images/icon/img.svg';
import men from '../images/men.png';
function Home() {
  return (
    <div className={homepage.Home}>
      <div className={homepage.minBox}> 
      <h2 className='title'>Home</h2>
    <div>
     <img src={star} alt="star" />
    </div>
      </div>

      <div className={homepage.btnbox}>

      <div className={homepage.end_box}>
         <div className={homepage.minbox}>
          <div>
            <img src={men} alt="" />
          </div>
          <div>
          <input className={homepage.input}  type="text" placeholder='What’s happening' />
          <div>
            <ul className={homepage.items}> <li><img src={img} alt="" /></li><li><img src={img} alt="" /></li><li><img src={img} alt="" /></li><li><img src={img} alt="" /></li></ul>
          </div>
          </div >
          <div><button className={homepage.btn}>Tweet</button></div>
         </div>
       </div>

      </div>

    </div>
  )
}

export default Home
