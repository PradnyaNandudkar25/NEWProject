import React,{useState} from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';


const Counter=()=>{
    
const [count,setCount]=useState(0);

const increment=() =>{
    setCount(count+1);
   
};

const decrement=() =>{
    setCount(count-1);
    
};
return(
    <div class="container pt-3 text-center ">
        <h1 class="text-secondary">Counter App</h1>
        <b>Count:{count}</b><br />
        <b>Even/Odd:{count} is {count%2===0 ? 'even':'odd'}</b><br />
        <b>Negative/Positive: {count} is {count>0 ? 'positive':'negative'}</b><br /><br />
        <button class="btn btn-success"  onClick={increment}>Increment</button>
        <button class="btn btn-danger ms-2" onClick={decrement}>Decrement</button>
    </div>

);
   
};
export default Counter;

