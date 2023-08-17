import React, { useState } from 'react';
import Navbar from './Navbar';
import './App.css';
import "bootswatch/dist/vapor/bootstrap.min.css";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <Navbar onSelect={handleOptionSelect} />
      <div className="content">
        
        {selectedOption && <p>Displaying {selectedOption} data...</p>}
      </div>
    </div>
  );
}

export default App;