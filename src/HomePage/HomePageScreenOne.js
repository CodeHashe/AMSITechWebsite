import React, { useEffect, useState } from 'react';
import { arrowDownOutline } from 'ionicons/icons';

function HomePageScreenOne({ heading, paragraph }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100); // Delay ensures smooth loading
    return () => clearTimeout(timer); // Clean up the timeout
  }, []);

  const gradientStyle = {
    backgroundImage: 'linear-gradient(to left, #163B6D 0%, #5E80AD 17%, #82A3CD 28%, #A6C5ED 55%)',
    backgroundSize: '200% 100%',
    width: '100vw',
    minHeight: '100vh',  // Ensures the container takes at least the full height of the viewport
    display: 'flex',
    flexDirection: 'column',
    animation: 'moveBackground 10s linear infinite',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
  };

  return (
    <div style={gradientStyle} className={`pgscontainer ${isLoaded ? 'loaded' : ''}`}>
      <div className="content">
        <div style={{ width: '80%', textAlign: 'center' }}>
          <h1 className={`pgsheading ${isLoaded ? 'fade-in' : ''}`}>{heading}</h1>
          <p className={`pgstext ${isLoaded ? 'fade-in' : ''}`}>{paragraph}</p>
        </div>
        <div
          style={buttonContainerStyle}
          className={`button-container ${isLoaded ? 'fade-in-container' : ''}`}
        >
          <button className="homePagebutton">Contact Us</button>
          <button className="homePagebutton">See Our Services</button>
        </div>
      </div>

      <div className="scroll-down-container">
        <div className="scroll-down-arrow">
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
        <p className="text">Scroll Down</p>
      </div>
    </div>
  );
}

export default HomePageScreenOne;
