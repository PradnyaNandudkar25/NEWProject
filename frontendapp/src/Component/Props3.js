import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Props3=({title,price,val})=>{
    return(
        <div style={{textAlign:"center",border:"2px solid black", margin:"20px",padding:"20px"}}>
            <h1></h1>
            <h3>Product:{title}</h3>
            <h3>Price:{price}</h3>

            {val && val.map ((item,index)=>(
                <li key={index}>{item}</li>

            ))
            }
        </div>
        
    );

} 

export default Props3;