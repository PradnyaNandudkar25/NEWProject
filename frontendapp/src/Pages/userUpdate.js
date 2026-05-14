import React,{useEffect,useState} from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

const UpdateUser=()=>{
const [newUser, setNewUser] = useState({
    emp_name: "",
    Address: "",
  });

const {id} = useParams(); 

const API=process.env.REACT_APP_BASE_URL || "http://localhost:5000";
console.log("API URL:",API);


 const handlechange = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${API}/api/update/${id}`, newUser, {
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
      <h1>Fill the Form</h1>

      <form onSubmit={handlechange}>
        <label>Enput Name:</label><br/>
        <input
          type="text"
          name="emp_name"
          placeholder="Employee Name"
          value={newUser.emp_name || ""}
          onChange={(e) => setNewUser({ ...newUser, emp_name: e.target.value })}
          required
        /><br /><br/>

        <label>Enput Address:</label><br/>
        <input
          type="text"
          name="Address"
          placeholder="Employee Address"
          value={newUser.Address}
          onChange={(e) => setNewUser({ ...newUser, Address: e.target.value })}
          required
        /><br/><br/>
        <button type="submit">Add User</button><br/>
      </form>
    </div>
)
}
export default UpdateUser;







 