


// import homeImage from './images/BearBull.png'; // Import the image

import React, { useRef, useEffect } from 'react';
import homeVideo from './images/BullBear.mp4';
import './Home.css';


const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play().catch(error => {
      console.error('Autoplay failed:', error);
    });
  }, []);

  const handleVideoEnd = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(error => {
      console.error('Autoplay failed:', error);
    });
  };

  return (
    <div className="home">

      <h2>Welcome to BullBearAnalytics</h2>
      <p>Your home page content goes here...</p>
      <img src={homeImage} alt="Home" /> {/* Use the imported image */}


      <div className="content">
        <h2>Welcome to BullBearAnalytics</h2>
      </div>
      <div className="video-container">
        <video
          ref={videoRef}
          className="background-video"
          autoPlay
          muted
          loop
          onEnded={handleVideoEnd}
        >
          <source src={homeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div> {/* Add this overlay */}
      </div>

    </div>
  );
};

export default Home;
