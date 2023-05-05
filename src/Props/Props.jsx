import React from 'react';
import { Link } from 'react-router-dom';
import './props.scss'
function Props(props) {
const {name,img,capital,ccn3}=props;
  return (
    <div className='props'>
        <Link className='href' to={`/alpha/${ccn3}`}>
        <h2 className='title'>
       {name} </h2>  
       <p>
       {capital} 
       </p>
       <img className='image' src={img} alt={name} />
        </Link>
    </div>
  )
}

export default Props
