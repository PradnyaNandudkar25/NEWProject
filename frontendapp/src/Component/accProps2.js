
import React from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

import Props2 from './props2'

const AccProps2 = () => {

 /* function getprice(price,discount){
        return price-(price * discount/100);
    }*/

    const getprice = (price, discount) => {
    return price * (1 - discount / 100);
  };
  

    return (
        <div class="container pt-3 text-center">

            <Props2  title="Asus" price="60000" dprice='30%' fprice={getprice(60000,40)} />
            <Props2 title="Dell" price="50000" dprice='20%' fprice={getprice(50000,20)}/>
            <Props2 title="HP" price="70000"   dprice='40%' fprice={getprice(70000,40)}/>

        </div>

    );

};
export default AccProps2;

