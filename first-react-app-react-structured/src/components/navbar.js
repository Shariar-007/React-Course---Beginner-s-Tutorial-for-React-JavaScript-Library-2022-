
import React from 'react';
import logo from './../images/react-logo.png'

function Navbar(){
    return (
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
        {/* <a class="navbar-brand" href="#">Navbar w/ text</a> */}
        <img src={logo} className="nav-logo" alt="logo" />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    {/* <a class="nav-link active" aria-current="page" href="#">ReactFacts</a> */}
                    <h1 className='left-name'>ReactFacts</h1>
                </li>
                {/* <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li> */}
            </ul>
            <span class="navbar-text" className='right-text'>
              React Course - Project 1
            </span>
        </div>
        </div>
    </nav>
    )
}


export default Navbar;