import React from 'react';
import { Link } from 'react-router-dom';
import './Props.scss';
function Props(props) {
    const {title,url,summary,id}=props;
  return (
    <div className='card'>
    <Link className='link' to={`news/${id}`} >
    <div className='box'>
    <h2>{title} </h2>
      <img className='img' src={url} alt={title} />
      <p>
        {summary}
      </p>
     
    </div>
        </Link>
    </div>
  )
}

export default Props
