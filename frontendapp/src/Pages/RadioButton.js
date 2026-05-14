import React from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';


const RadioButton = () => {
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
        <div className="radiobutton" class=" container pt-2 bg-light text-center">
            <h1>Radio Button</h1>

            <form>
                <div class="container">
                <p>select your favorite color:</p>
                

                    <input type="radio" id="red" name="fav_color" value="red" />
                    <label class="text-danger">Red</label><br />
                
                    <input type="radio" id="blue" name="fav_color" value="blue" />
                    <label class="text-primary">Blue</label><br />
                     
                    <input type="radio" id="green" name="fav_color" value="green" />
                    <label class="text-success">Green</label><br />

                    <input type="radio" id="yellow" name="fav_color" value="yellow" />
                    <label class="text-warning">Yellow</label><br />
                  </div> 
            </form>
        </div>
        </div>
    );
};

export default RadioButton;
