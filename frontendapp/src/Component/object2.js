import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

function InputObject() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [details, setDetails] = useState({});

    function submit(e) {
        e.preventDefault();

        setDetails({
            name: name,
            age: age,
            address: address
        });
    }


    function myname(e) {
        setName(e.target.value);
    }

    function myage(e) {
        setAge(e.target.value);
    }

    function myaddress(e) {
        setAddress(e.target.value);
    }

    return (
        <div className="container mt-3">
            <h2>About Myself</h2>
            <form>
                <label>Name:</label><br/>
                <input type="text" placeholder="Enter name" onChange={myname} /><br/>

                <label>Age:</label><br/>
                <input type="text" placeholder="Enter age" onChange={myage} /><br/>

                <label>Address:</label><br/>
                <input type="text" placeholder="Enter address" onChange={myaddress} /><br/><br/>

                <button className="btn btn-success" onClick={submit}>Submit</button>
            </form>

            <div className="container">
                <h2>Details</h2>
                <p>Name:{details.name}</p>
                <p>Age:{details.age}</p>
                <p>Address:{details.address}</p>
            </div>

        </div>
    );
}
export default InputObject;