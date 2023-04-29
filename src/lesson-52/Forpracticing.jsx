import './main.css'
import { useState, useEffect } from "react";
import axios from "axios";

function Practicing() {

    const [chanche,setchanche]=useState('post');
    const [data,setdata]=useState([]);
   
const getdata=async ()=>{
    try {
        const response=await axios.get(`https://restcountries.com/v3.1/all`);
     setdata(response.data)
     console.log(data);
    } catch (error) {
        
    }
}


useEffect(()=>{
getdata();
},[])

    return(
        <div>
            <button onClick={()=>setchanche('post')}>post</button>
            <button onClick={()=>setchanche('data')}>data</button>
            <button onClick={()=>setchanche('common')}>common</button>
         {
            chanche
         }
           <div className='card'>
           {
            data.map((country)=>(
                <div>
                   <h1 className="title">{country.name.common}
                   </h1>

                     <p>{country.capital}</p>
                    <img className='image' src={country.flags.png} alt={country.region} /> 
                   </div>   
                ))
            }
           </div>
        </div>
    )
}
export default Practicing;