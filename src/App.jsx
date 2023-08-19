import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard'; // Import the Dashboard component
import SignUp from './SignUp'; 
import './App.css';
import 'bootswatch/dist/vapor/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/loginForm" exact={true} element={<LoginForm />} />
        <Route path="/signUp" exact={true} element={<SignUp />} />
        <Route path="/dashboard" exact={true} element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

        {/* <Navbar onSelect={handleOptionSelect} />
        <div className="content">
          {selectedOption === 'Home' ? (
            <Home />
          ) : selectedOption === 'Login' ? (
            <LoginForm />
          ) : selectedOption === 'Dashboard' ? (
            <Dashboard /> // Display Dashboard component when 'Dashboard' is selected
          ) : selectedOption === 'SignUp' ? (
            <SignUp /> 
          ) : (
            <p>Displaying {selectedOption} data...</p>
          )}
        </div> */}

    </div>
  );
}

export default App;
