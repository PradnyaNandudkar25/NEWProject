import React,{useState} from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

function Add(){
    const[no1,setNo1]=useState("");
    const[no2,setNo2]=useState("");
    const[result,setResult]=useState("");

    function add(){
        setResult(+no1 + +no2);
    }
    
    function ch1(e){
        setNo1(e.target.value);
    }

     function ch2(e){
        setNo2(e.target.value);
    }

    return(
        <div>
            <h1>Addition</h1>

{/* 
    <input type="text" placeholder="no1" value={no1} onChange={(e)=>setNo1(e.target.value)}/><br /><br />   
    <input type="text" placeholder="no2" value={no2} onChange={(e)=>setNo2(e.target.value)}/><br /><br />   */}

     <input type="text" placeholder="Enter First No" value={no1} onChange={ch1}/><br /><br />   
    <input type="text" placeholder="Enter Second No" value={no2} onChange={ch2}/><br /><br />      
    

    <button onClick={add} className="btn btn-primary">Add</button><br /><br />

      <label>Result: {result}</label>
        </div>

    );
}
export default Add;

