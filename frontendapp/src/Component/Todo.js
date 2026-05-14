import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const add = () => {
    if (text) {
      setList([...list, text]);
      setText("");
    }
  };

  const remove = (i) => {
    setList(list.filter((_, index) => index !== i));
  };

  return (
    <div class="container mt-4 text-center pt-2" >
      <h2>Todo List</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text"/>
      <button class="btn btn-success ms-2" onClick={add}>Add</button><br /><br />

      {list.map((item, i) => (
        <div key={i} class="mb-2">
          {item} <button  class="btn btn-danger btn-sm ms-2" onClick={() => remove(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
