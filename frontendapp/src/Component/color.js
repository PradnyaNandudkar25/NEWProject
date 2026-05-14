import React,{useState} from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';


const Color=()=>{
    const[color,setColor]=useState("");
    

return(
    <div class="container pt-3 text-center ">
        <h1>Colors</h1><br />

        <h3 style={{color:color}}>You Clicked {color}</h3>
         
        {/* <button class="btn btn-success" onClick={()=>setColor("Green")}>Green</button> */}
        <button class="btn btn-warning ms-2" onClick={()=>setColor("yellow")}>Yellow</button>
        <button class="btn btn-danger ms-2" onClick={()=>setColor("Red")}>Red</button>
        <button class="btn btn-primary ms-2" onClick={()=>setColor("Blue")}>Blue</button>
    </div>

);
   
};
export default Color;