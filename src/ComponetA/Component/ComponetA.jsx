import axios from 'axios';
import { useState,useEffect } from 'react'
import Props from '../Props/Props';
import './componenta.scss'
function ComponetA() {

  const [data, setdata] = useState([]);

const FatchData= async  ()=> {
  
  const response= await axios.get(`https://api.spaceflightnewsapi.net/v3/articles`);
  setdata(response.data)
}
useEffect(()=>{
  FatchData()
},[])

  return (
    <div className='card'>
      {
        data.map((news)=>{
        return(
          <Props key={news.id} title={news.title} url={news.imageUrl} summary={news.summary} id={news.id} />
        )
        })
      }
    </div>
  )
}

export default ComponetA
