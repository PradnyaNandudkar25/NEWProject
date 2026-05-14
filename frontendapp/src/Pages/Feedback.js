import React from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

const Feedback = () => {
    return (
        <div>

       <nav class="navbar navbar-expand-sm bg-dark">

            <div class="container-fluid">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link text-white" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="/feedback">Feedback</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="/radio">RadioButton</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="/dropdown">Dropdown</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="/login">Login</a>
                    </li>
                      <li class="nav-item">
                        <a class="nav-link text-white" href="/login2">LoginwithGoogle</a>
                    </li>
                </ul>
            </div>

        </nav>

        
        <div class=" container mt-4 text-center bg-info pt-2">
            <h1>Feedback Form </h1>
            <form>
                <p>Fill the feedback form...</p>

                <label>Name:</label>
                <input type="text" name="name" />
                <br /> <br />

                <label>Email:</label>
                <input type="text" name="name" />
                <br />  <br />

                <label>Message:</label>
                <textarea name="message"></textarea>
                <br /> <br />

                <button type="button" class="btn btn-success mb-3">Submit</button>
            </form>
        </div>
        </div>
    )
};

export default Feedback;