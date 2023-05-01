import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Page() {
    const {name} = useParams();
    const [data,setdata]=useState([{}]);
   
    const getdata=async ()=>{
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
         setdata(response.data);
        
        } catch (error) {
            
        }
    }
    
    useEffect(()=>{
    getdata();
    },[])
console.log(data);



  return (
    <div>
        <Link to='/'>Home</Link>
     
    </div>
   
  )
}

export default Page;
