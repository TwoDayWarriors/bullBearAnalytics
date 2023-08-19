import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import SignUp from './SignUp';
import './App.css';
import 'bootswatch/dist/vapor/bootstrap.min.css';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Add isAuthenticated state

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleLogin = () => {
    // Your login logic here
    // If login is successful, set isAuthenticated to true
    console.log("Login Successful")
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      <Navbar onSelect={handleOptionSelect} />
      <div className="content">
        {selectedOption === 'Home' ? (
          <Home />
        ) : selectedOption === 'Login' ? (
          isAuthenticated ? (
            <Dashboard /> // Display Dashboard when authenticated
          ) : (
            <LoginForm onLogin={handleLogin} /> // Pass onLogin callback to LoginForm
          )
        ) : selectedOption === 'SignUp' ? (
          <SignUp />
        ) : (
          <p>Displaying {selectedOption} data...</p>
        )}
      </div>
    </div>
  );
}

export default App;
