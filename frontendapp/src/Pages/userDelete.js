import React,{useEffect,useState} from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

const DeleteUser=()=>{
const [newUser, setNewUser] = useState({
    emp_name: "",
    Address: "",
  });

const {id} = useParams(); 

const API=process.env.REACT_APP_BASE_URL || "http://localhost:5000";
console.log("API URL:",API);


 const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`${API}/api/delete/${id}`, newUser, {
        headers: { "Content-Type": "application/json" },
      });

      alert("User updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to insert user!");
    }
  };


return(
     <div>
      <button onClick={handleDelete}>Yes Delete Record</button>
    </div>
)
}
export default DeleteUser;







 