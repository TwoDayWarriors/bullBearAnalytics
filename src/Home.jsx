import React from 'react';

import homeImage from './images/BearBull.png'; // Import the image


const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to BullBearAnalytics</h2>
      <img src={homeImage} alt="Home" /> {/* Use the imported image */}


    </div>
  );
};

export default Home;
