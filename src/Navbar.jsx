import React, { useState } from 'react';

const Navbar = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h4>BullBearAnalytics</h4>
      </div>
      <div className="selection-menu">
        <button
          className={selectedOption === 'Price' ? 'active' : ''}
          onClick={() => handleOptionSelect('Price')}
        >
          Price
        </button>
        <button
          className={selectedOption === 'Performance' ? 'active' : ''}
          onClick={() => handleOptionSelect('Performance')}
        >
          Performance
        </button>
        <button
          className={selectedOption === 'Technical' ? 'active' : ''}
          onClick={() => handleOptionSelect('Technical')}
        >
          Technical
        </button>
      </div>
    </nav>
  );
};

export default Navbar;