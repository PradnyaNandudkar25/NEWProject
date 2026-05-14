
import React, { useState } from "react";

const Todocart = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  

 function add(){
    if (!text) {
      alert("Please enter the text");
    }else{
      setList([...list,{text:text,bought:false}]);
      setText("");
    }
  };

 function remove(i) {
    setList(list.filter((_, index) => index !== i));
  };


  function Bought(i) {
    const newList = [...list];
    newList[i].bought = true;
    setList(newList);
  }
  
  return (
    <div class="container mt-4 text-center pt-2" >
      <h2>Todo Cart List</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text"/>
      <button class="btn btn-success ms-2" onClick={add}>Add</button><br /><br />

      {list.map((item, i) => (
        <div key={i} class="mb-2">
          <span style={{color:item.bought ? 'blue' : 'black'}}>
            {item.text}
          </span>
         <button  class="btn btn-warning btn-sm ms-2" onClick={() => Bought(i)}>Bought</button>
          <button  class="btn btn-danger btn-sm ms-2" onClick={() => remove(i)}>Delete</button>
          
        </div>
      ))}
    </div>
  );
};


export default Todocart;
