import React from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

const Login2 = () => {
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
   <div class="container mt-4 text-center pt-2">
    <h1>Login Form</h1>
    <form>
        <label>Username:</label>
        <input type="text" name="username" placeholder="Enter Username" />
        <br /><br />

        <label>Password:</label>
        <input type="password" name="password" placeholder="Enter password" />
        <br /><br />

        <button type="button" class="btn btn-success mb-3">Submit</button>
    </form>

    <hr />
<a 
  href="https://accounts.google.com/ServiceLogin" 
  target="_blank" 
  style={{ textDecoration: "none" }}
>
  <div 
    style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "8px 16px",
      border: "1px solid #dadce0",
      borderRadius: "5px",
      backgroundColor: "white",
      cursor: "pointer"
    }}
  >
    <img 
      src="https://developers.google.com/identity/images/g-logo.png"
      alt="Google Logo"
      style={{ width: "20px", marginRight: "10px" }}
    />
    
    <span style={{ fontSize: "14px", color: "#555" }}>
      Sign in with Google
    </span>
  </div>
</a>

</div>
        </div>
    )
};

export default Login2;