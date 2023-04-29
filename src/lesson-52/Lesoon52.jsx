import './main.css';
import { useState } from 'react';
function Lesson52() {
    const [color,setcolor]=useState(false);
    function chancgecolor() {
        setcolor(!color)
    }
return(

    <div className={color ? 'darck' : 'red'}>
    <h1 className={color ? 'h1' : 'h2'}>hello world</h1>
    <button onClick={chancgecolor}>click</button>
    </div>
) 
}

export default Lesson52;