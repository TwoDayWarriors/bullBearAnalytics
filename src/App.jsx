import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard'; // Import the Dashboard component
import SignUp from './SignUp'; 

import './App.css';
import 'bootswatch/dist/vapor/bootstrap.min.css';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <Navbar onSelect={handleOptionSelect} />
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
      </div>
    </div>
  )
}

export default App;
