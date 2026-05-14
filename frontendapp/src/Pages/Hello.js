import React from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';


const Hello=() => {
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


    <h1 class="text-center">Hello World !</h1>
     </div>
    );
};

export default Hello;