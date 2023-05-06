import React from 'react';
import './footer.scss';
import search from '../images/icon/search.svg';
import seting from '../images/icon/seting.svg';
import icon from '../images/icon/icon.svg';
import men from '../images/men.png';
import { Link } from 'react-router-dom';

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
<div className='set1'>
 <div>
 <h3>Trends for you</h3>
 </div>
<div>
<img src={seting} alt="" />
</div>
</div>
<div className='set1'>
 <div>
<h4 className='title-minbox'>Trending in Germany</h4>
<h3 className='title-minbox'>Revolution</h3>
<p className='title-minbox'>50.4K Tweets</p>
 </div>
<div>
<img src={icon} alt="icon" />
</div>
</div>
<div className='set1'>
 <div>
<h4 className='title-minbox'>Trending in Germany</h4>
<h3 className='title-minbox'>Revolution</h3>
<p className='title-minbox'>50.4K Tweets</p>
 </div>
<div>
<img src={icon} alt="icon" />
</div>
</div>
<div className='set1'>
 <div>
<h4 className='title-minbox'>Trending in Germany</h4>
<h3 className='title-minbox'>Revolution</h3>
<p className='title-minbox texting'>50.4K Tweets</p>
 </div>
<div>
<img src={icon} alt="icon" />
</div>
</div>
<Link className='link'>Show more</Link>
     </div>
     <div className='end_box'>
         <h2>You might like</h2>
         <div className='min-box'>
          <div>
            <img src={men} alt="" />
          </div>
          <div>
            <h4 className='title-minbox'>Shuhratbek</h4>
            <p className='title-minbox'>@mrshukhrat</p>
          </div>
          <div><button className='btn-showmore'>Follow</button></div>
         </div>

       </div>
       <div className='end_box'>
         <div className='min-box2'>
          <div>
            <img src={men} alt="" />
          </div>
          <div>
            <h4 className='title-minbox'>Shuhratbek</h4>
            <p className='title-minbox'>@mrshukhrat</p>
          </div>
          <div><button className='btn-showmore'>Follow</button></div>
         </div>
       </div>
       <Link  className='link2'>Show more</Link>
    </div>
  )
}

export default Footer
