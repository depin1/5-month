import axios from 'axios';
import { useState,useEffect } from 'react'
import Props from '../Props/Props';
import './componenta.scss'
function ComponetA() {

  const [data, setdata] = useState([]);
const [searchdata,setsearchdata]=useState('');
const FatchData= async  ()=> {
  
  const response= await axios.get(`https://api.spaceflightnewsapi.net/v3/articles`);
  setdata(response.data);
  console.log(data);
}
useEffect(()=>{
  FatchData()
},[])

const mapdata=data.filter((searchdatas)=>{
  if (!searchdata.trim()) {
    return searchdatas
  }else if(searchdatas.title.includes(searchdata)){
    return searchdatas  
  }
}).map((news)=>{
  return(
    <Props key={news.id} title={news.title} url={news.imageUrl} summary={news.summary} id={news.id} />
  )
  })

  return (
   <div>
     <div className='box_for_input'>
    <input className='input' type="text" placeholder='search' value={searchdata} onChange={(e)=>setsearchdata(e.target.value)} />
    </div>
    <div className='card'>
      {mapdata}
    </div>
   </div>
  )
}

export default ComponetA
