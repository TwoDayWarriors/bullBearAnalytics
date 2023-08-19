import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file

import { Link } from 'react-router-dom'


const Navbar = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" data-bs-theme="light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          BullBearAnalytics
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${selectedOption === 'Home' ? 'active' : ''}`}
                href="#"
                onClick={() => handleOptionSelect('Home')}
              >
                {/* Home */}
              </a>
                <Link to="/" className='nav-link'>Home</Link>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${selectedOption === 'Price' ? 'active' : ''}`}
                href="#"
                onClick={() => handleOptionSelect('Login')}
              >
                {/* Login */}
              </a>
              <Link to="/loginForm" className='nav-link'>Login</Link>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  selectedOption === 'Performance' ? 'active' : ''
                }`}
                href="#"
                onClick={() => handleOptionSelect('SignUp')}
              >
                {/* SignUp */}
              </a>
              <Link to="/signUp" className='nav-link'>SignUp</Link>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  selectedOption === 'Technical' ? 'active' : ''
                }`}
                href="#"
                onClick={() => handleOptionSelect('Dashboard')}
              >
                {/* Dashboard */}
              </a>
              <Link to="/dashboard" className='nav-link'>Dashboard</Link>
            </li>
          </ul>
          {/* <form className="d-flex" >
            <input
              className="form-control me-sm-2"
              type="search"
              placeholder="Search"
            />
            <button type="button" className="btn btn-outline-danger" >Submit</button>
          </form> */}
          <a className="navbar-brand" href="#">
          BullBearAnalytics
        </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
//comment