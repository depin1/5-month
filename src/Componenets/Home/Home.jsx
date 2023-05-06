import React from 'react';
import homepage from './home.module.scss';
import star from '../images/icon/star.svg';
import img from '../images/icon/img.svg';
import icon from '../images/icon/icon.svg';
import men2 from '../images/men2.png';
import men3 from '../images/me3.png';
import men4 from '../images/men4.png';
import men5 from '../images/men5.png';
import food from '../images/food.png';
//icons
import {BiBarChart } from 'react-icons/bi';
import {AiOutlineDownload,AiOutlineRetweet } from 'react-icons/ai';
import {BsFillChatTextFill} from 'react-icons/bs';
import {GiSelfLove} from 'react-icons/gi';



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
            <img src={men2} alt="" />
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

       <div className={homepage.box}>
        <div><img src={men3} alt="men" /></div>
        <div className={homepage.center}>
          <div className={homepage.flex}>
          <h3 className={homepage.title_minbox}>Designsta</h3><span className={homepage.span_minbox}>@inner · 25m</span>
          </div>
        <div>  <p  className={homepage.text}>Twitterdagi ayol-erkak qarama zerikmadinglarmi?</p></div>
          <div> <ul className={homepage.items2}> <li><BsFillChatTextFill/>10</li><li><AiOutlineRetweet/>1</li><li><GiSelfLove/>8</li><li><AiOutlineDownload/></li><li><BiBarChart/></li></ul></div>
        </div>
        <div className={homepage.icon}><img src={icon} alt="icon" /></div>
       </div>

       <div className={homepage.box}>
        <div><img src={men4} alt="men" /></div>
        <div className={homepage.center}>
          <div className={homepage.flex}>
          <h3 className={homepage.title_minbox}>cloutexhibition</h3><span className={homepage.span_minbox}>@RajLahoti · 22m</span>
          </div>
        <div>  <p  className={homepage.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, et.</p></div>
          <div> <ul className={homepage.items2}> <li><BsFillChatTextFill/></li><li className={homepage.retwet}><AiOutlineRetweet/>5</li><li className={homepage.love}><GiSelfLove />9</li><li><AiOutlineDownload/></li><li><BiBarChart/></li></ul></div>
        </div>
        <div className={homepage.icon}><img src={icon} alt="icon" /></div>
       </div>

       <div className={homepage.box}>
        <div><img src={men5} alt="men" /></div>
        <div className={homepage.center}>
          <div className={homepage.flex}>
          <h3 className={homepage.title_minbox}>CreativePhoto</h3><span className={homepage.span_minbox}>@cloutexhibition · 1h</span>
          </div>
          <div><p  className={homepage.text}>Обетда.....Кечиринглар</p></div>
          <div>
            <img className={homepage.image_food} src={food} alt="" />
          </div>
          <div> <ul className={homepage.items2}> <li><BsFillChatTextFill/>10</li><li><AiOutlineRetweet/>1</li><li><GiSelfLove />8</li><li><AiOutlineDownload/></li><li><BiBarChart/></li></ul></div>
        </div>
        <div className={homepage.icon}><img src={icon} alt="icon" /></div>
       </div>

    </div>
  )
}

export default Home
