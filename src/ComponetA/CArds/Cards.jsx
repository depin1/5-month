import React from 'react'
import { useParams } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function Cards() {


  const [state, setstate] = useState([]);
  const { id }=useParams();
  const FatchData= async  ()=> {
  
    const response= await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`);
    setstate(response.data)
  }
  useEffect(()=>{
    FatchData()
  },[])
  return (
    <div>
      <div className='box2'>
      <Link to='/'>Home page</Link>
    <h2>{state.title} </h2>
      <img className='img' src={state.imageUrl} alt={state.title} />
      <p>
        {state.summary}
      </p>
    </div>
     
    </div>
  )
}

export default Cards
