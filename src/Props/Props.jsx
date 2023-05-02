import React from 'react';
import { Link } from 'react-router-dom';
function Props(props) {
const {name,img,capital,ccn3}=props;
  return (
    <div>
        <Link to={`/alpha/${ccn3}`}>Read more</Link>
    <h2>
       {name} </h2>  
       <p>
       {capital} 
       </p>
       <img src={img} alt={name} />
<h2>{ccn3}</h2>
    </div>
  )
}

export default Props
