import React from 'react';
import { Link } from 'react-router-dom';
//imgaes
import twiter from '../images/icon/twiter.svg';
// import home from '../images/icon/home.svg';
// import hashteg from '../images/icon/hashtag.svg';
// import Notifications from '../images/icon/Notifications.svg';
// import Messages from '../images/icon/Messages.svg';
// import Profile from '../images/icon/Profile.svg';
// import Bookmarks from '../images/icon/Bookmarks.svg';
// import Lists from '../images/icon/Lists.svg';
// import More from '../images/icon/More.svg';
//propurty
//icons
import {AiFillHome} from 'react-icons/ai';
import {FaHashtag} from 'react-icons/fa';
import {IoMdNotifications} from 'react-icons/io';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {BsBookmarks} from 'react-icons/bs';
import {VscListSelection} from 'react-icons/vsc';
import {CgProfile,CgMoreO} from 'react-icons/cg';

//cions
import './navbar.scss';

function Navbar() {
  return (
    <div>
      <div className='Navbar'>
      <div className='Navbar_box'>
  <div>
    <div className='image'><img src={twiter} alt="twiter" /></div>
    <div className='pad item1'><Link className='item1' to='/'> <AiFillHome className='icon'/> <p className='home_title'>Home</p></Link></div>
    <div className='pad item1'> <FaHashtag className='icon'/> <p className='home_title'>Explore</p> </div>
    <div className='pad item1'> <IoMdNotifications className='icon'/> <p className='home_title'>Notifications</p>  </div>
    <div className='pad item1'> <BiMessageSquareDetail className='icon'/> <p className='home_title'>Messages</p></div>
    <div className='pad item1'> <BsBookmarks className='icon'/> <p className='home_title'>Bookmarks</p></div>
    <div className='pad item1'> <VscListSelection className='icon'/> <p className='home_title'>Lists</p></div>
    <div className='pad item1'><Link className='item1' to='/Profile'><CgProfile className='icon'/> <p className='home_title'>Profile</p></Link></div>
    <div className='pad item1'> <CgMoreO className='icon'/><p className='home_title'>More</p></div>
  </div>
        
           
            <button className='btn'>Tweet</button>
       
      </div>
      </div>
    </div>
  )
}

export default Navbar
