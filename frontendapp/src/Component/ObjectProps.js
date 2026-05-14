import React from "react";

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

function ObjectProps({name,age,address}){
    return(
        <div style={{textAlign:'center',border:'2px solid black',margin:'20px',padding:'20px',backgroundColor:"pink"}}>
            <h2>Name:{name}</h2>
            <h2>Age:{age}</h2>
            <h2>Address:{address}</h2>

        </div>
    );
}
export default ObjectProps;