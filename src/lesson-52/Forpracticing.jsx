import './parctising.scss'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
function Practicing() {

    
    const [data,setdata]=useState([]);
   
const getdata=async ()=>{
    try {
        const response=await axios.get(`https://restcountries.com/v3.1/all`);
     setdata(response.data)
    
    } catch (error) {
        
    }
}


useEffect(()=>{
getdata();
},[])

    return(
        <div>
           <div className='card'>
           {
            data.map((country)=>(
                <div key={country.name.common}>
                   <h1 className="title">{country.name.common}
                   </h1>
                     <p>{country.capital} </p>
                    <img className='image' src={country.flags.png} alt={country.region} /> 
                    <Link to={`news/${country.name.common}`}>Page</Link>
                   </div>   
                ))
            }
           </div>
        </div>
    )
}
export default Practicing;