import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Props3 from "./Props3";

function AccProps3(){

    let arr=["ASUS","HP","DELL"];

    return(
        <div>
            <Props3 title="ASUS" price="50000"/>
            <Props3 title="HP" price="60000" val={arr}/>
            <Props3 title="DELL" price="70000"/>
        </div>
    )
}


export default AccProps3;