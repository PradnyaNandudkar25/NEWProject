import React from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

const Dropdown = () => {
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
        <div className="dropdown" class="container mt-3">
            <h1 class="bg-success text-white">Dropdown List</h1>

            <form>
                <label for="options">Choose Qualification: </label>
                <select id="options" name="selected_option">
                    <option value="option1">MCA</option>
                    <option value="option2">BCA</option>
                    <option value="option3">BSC</option>
                    <option value="option4">MBA</option>
                    <option value="option5">BA</option>

                </select>
               
            </form>
        </div>
        </div>
    );
};

export default Dropdown;
