import React from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
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
        <div class=" container mt-4 text-center bg-warning pt-2">
            <h1>Login Form </h1>
            <form>
                <label>Username:</label>
                <input type="text" name="name" placeholder="Enter Username" />
                <br /> <br />

                <label>Password:</label>
                <input type="password" name="name" placeholder="Enter password" />
                <br />  <br />

                <button type="button" class="btn btn-success mb-3">Submit</button>
            </form>
        </div>
        </div>
    )
};

export default Login;