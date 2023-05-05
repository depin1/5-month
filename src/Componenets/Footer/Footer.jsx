import React from 'react';
import './footer.scss';
import search from '../images/icon/search.svg';
import seting from '../images/icon/seting.svg';
function Footer() {
  return (
    <div className='box'>
     <div className='min_box'>
     <div className='for_input'>
        <img src={search} alt="search" />
       <input className='input' type="text" placeholder='search' />
      </div>
     </div>
     <div className='Settingpage'>
<div>
  <h3>Trends for you</h3>
  <img src={seting} alt="" />
</div>
     </div>
    </div>
  )
}

export default Footer
