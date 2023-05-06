import React from 'react';
import { Link } from 'react-router-dom';
//imgaes
import twiter from '../images/icon/twiter.svg';
import home from '../images/icon/home.svg';
import hashteg from '../images/icon/hashtag.svg';
import Notifications from '../images/icon/Notifications.svg';
import Messages from '../images/icon/Messages.svg';
import Profile from '../images/icon/Profile.svg';
import Bookmarks from '../images/icon/Bookmarks.svg';
import Lists from '../images/icon/Lists.svg';
import More from '../images/icon/More.svg';
//propurty
import './navbar.scss';

function Navbar() {
  return (
    <div>
      <div className='Navbar'>
      <div className='Navbar_box'>
        <ul>
            <li className='image'><img src={twiter} alt="twiter" /></li>
            <li><Link className='item1' to='/'><img src={home} alt="home" /><p className='home_title'>Home</p></Link></li>
            <li className='item1'><img src={hashteg} alt="home" /><p className='home_title'>Explore</p></li>
            <li className='item1'><img src={Notifications} alt="home" /><p className='home_title'>Notifications</p>  </li>
            <li className='item1'><img src={Messages} alt="home" /><p className='home_title'>Messages</p></li>
            <li className='item1'><img src={Bookmarks} alt="home" /><p className='home_title'>Bookmarks</p></li>
            <li className='item1'><img src={Lists} alt="home" /><p className='home_title'>Lists</p></li>
            <li ><Link className='item1' to='/Profile'><img src={Profile} alt="home" /><p className='home_title'>Profile</p></Link></li>
            <li className='item1'><img src={More} alt="home" /><p className='home_title'>More</p></li>
            <button className='btn'>Tweet</button>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar
