import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function Page() {
 
  const {ccn3}=useParams();

  const [data, setdata] = useState({});

  const fetchData = async () => {
      const response  = await axios.get(`https://restcountries.com/v3.1/alpha/${ccn3}`)
      setdata(response.data);
     
  }

  useEffect(()=>{
    fetchData();
  },[])

  console.log(data);
    return (
    <div className='page'>
         <Link to='/'>Home</Link>
      <h1>{data[0].population}</h1>
      
    </div>
   
  )
}

export default Page;
