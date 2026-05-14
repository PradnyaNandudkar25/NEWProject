import React,{useEffect,useState} from "react";
import axios from "axios";
import{ Link } from "react-router-dom";

const UserPage=()=>{
const [userData ,setUserData]=useState([]);

const API=process.env.REACT_APP_BASE_URL || "http://localhost:5000";
console.log("API URL:",API);

useEffect(()=>{
    axios.get(`${API}/api/user`)
    .then((res)=>{
        setUserData(res.data);
    })
    // axios.post(`${API}/api/insert`)
    // .then((res)=>{
    //     setUserData(res.data); 
    // })
},
[API]);

const handleDelete=async(id)=>{
    try{
        await axios.delete(`${API}/api/delete/${id}`);
        alert("User Deleted Successfully");
    }
    catch(error){
        console.error(error);
        alert("Failed to delete employee!")
    }
}

return(
    <div>
        <h1>User Page</h1>
        <table border="1" cellPadding="10" style={{width:"60%",textAlign:"center"}}>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Employee Address</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
                <tbody>
                    {userData.map((user)=>(
                        <tr key={user.emp_id}>
                            <td>{user.emp_id}</td>
                            <td>{user.emp_name}</td>
                            <td>{user.Address}</td>
                            <td>
                                <Link to={`/userEdit/${user.emp_id}`}>
                                <button>Edit</button>
                                </Link>
                            </td>
                            <td>
                                <button onClick={()=>handleDelete(user.emp_id)}>Delete</button>
                            </td>
                             {/* <td>
                                <Link to={`/userDelete/${user.emp_id}`}>
                                <button>Delete</button>
                                </Link>
                            </td> */}
                        </tr>
                    ))}

                </tbody>
            </table>
    </div>
)
}

export default UserPage;


