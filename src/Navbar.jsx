import React, { useState } from 'react';
import NavPic from './images/BearBullHead.png';
import './Navbar.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Navbar = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" data-bs-theme="light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          BullBearAnalytics
        </Link>
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
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${selectedOption === 'Home' ? 'active' : ''}`}
                onClick={() => handleOptionSelect('Home')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/loginForm"
                className={`nav-link ${selectedOption === 'Login' ? 'active' : ''}`}
                onClick={() => handleOptionSelect('Login')}
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signUp"
                className={`nav-link ${selectedOption === 'SignUp' ? 'active' : ''}`}
                onClick={() => handleOptionSelect('SignUp')}
              >
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dashboard"
                className={`nav-link ${selectedOption === 'Dashboard' ? 'active' : ''}`}
                onClick={() => handleOptionSelect('Dashboard')}
              >
                Dashboard
              </Link>
            </li>
          </ul>
          <img src={NavPic} alt="BullBearLogo" height="80"/> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
.