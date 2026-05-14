import React from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';


const Props2=({title, price,dprice,fprice})=>{
    
 
return(
<div style={{textAlign:"center",border:"2px solid black", margin:"20px",padding:"20px" , backgroundColor:"pink"}}>

      <h2>Product: {title}</h2>
      <h4>Price: {price}</h4>
      <h4>Discount:{dprice}</h4>
      <h3>Total Price: {fprice}</h3>
 
</div>
);
   
};
export default Props2;


