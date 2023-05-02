import './parctising.scss'
import { useState, useEffect } from "react";
import axios from "axios";
import Props from '../Props/Props';
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
                <Props key={country.name.common} name={country.name.common} ccn3={country.ccn3} img={country.flags.png} capital={country.capital} />
                ))
            }
           </div>
        </div>
    )
}
export default Practicing;