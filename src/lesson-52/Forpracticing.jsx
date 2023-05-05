import './parctising.scss'
import { useState, useEffect } from "react";
import axios from "axios";
import Props from '../Props/Props';
function Practicing() {

    const [search,setsearch]=useState('');
    const [data,setdata]=useState([]);
   
const getdata=async ()=>{
    try {
        const response=await axios.get(`https://restcountries.com/v3.1/all`);
     setdata(response.data)
    
    } catch (error) {
        
    }
}
console.log(data);

useEffect(()=>{
getdata();
},[])

const fatchdatamap=data.filter ((params)=>{
    if (!search.trim()) {
        return params
    }
else if (params.name.common.toLowerCase().includes(search)) {
    return params
}
}).map((country)=>(
    <Props key={country.name.common} name={country.name.common} ccn3={country.ccn3} img={country.flags.png} capital={country.capital} />
    ))

    return(
        <div>
            <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} />
           <div className='card'>
           
           {
            fatchdatamap
           }
           </div>
        </div>
    )
}
export default Practicing;