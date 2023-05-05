import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './page.scss';
function Page() {
 
  const {ccn3}=useParams();

  const [data, setdata] = useState({});

  const fetchData = async () => {
      const response  = await axios.get(`https://restcountries.com/v3.1/alpha/${ccn3}`)
      setdata(response.data[0]);
     
  }

  useEffect(()=>{
    fetchData();
  },[])

  console.log(data);
    return (
    <div className='page' key={data}>
      <div className='pagenat'>
      <img className='imagepage' src={data.flags?.png}  />
      <h1>{data.name?.common}</h1>
      <h2>{data.capital}</h2>
      <Link to='/'>Home</Link>
      </div>
    </div>
   
  )
}

export default Page;
