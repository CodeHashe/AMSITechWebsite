import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import AngularLogo from "../assets/AngularLogo.svg";
import AWSLogo from "../assets/AWSLogo.svg";
import AzureLogo from "../assets/AzureLogo.svg";
import DjangoLogo from "../assets/DjangoLogo.svg";
import MongoLogo from "../assets/MongoLogo.svg";
import PHPLogo from "../assets/PHPLogo.svg";
import PythonLogo from "../assets/PythonLogo.svg";
import ReactLogo from "../assets/ReactLogo.svg";

// Register GSAP plugin
gsap.registerPlugin(TextPlugin);

function HomePageScreenTwo() {
  const headingRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to(headingRef.current, {
      duration: 2,
      text: "The Technologies and Languages We Work With",
      ease: "none"
    })
    .to(".tech-description", {
      opacity: 1,
      y: 0,
      duration: 1
    })
    .to(".logo", {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.5,
      stagger: 0.2
    });

    return () => tl.kill();
  }, []);

  const styles = {
    mainContainer: {
      background: 'linear-gradient(to right, #A6C5ED, #82A3CD, #5E80AD, #163B6D)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      border: '10px solid #163B6D', // Adding the border
      borderRadius: '15px', // Optional rounded corners for the border
      boxSizing: 'border-box', // Ensures padding and border are included in dimensions
    },
    contentWrapper: {
      maxWidth: '1200px',
      width: '100%',
      display: 'flex',
      gap: '4rem',
      color: '#ffffff'
    },
    textSection: {
      flex: 1
    },
    heading: {
      fontFamily: 'MagistralBlack, sans-serif',
      fontWeight: 'normal',
      fontSize: '56px',
      margin: '20px 0',
      color: '#163B6D',
      wordWrap: 'break-word'
    },
    description: {
      fontFamily: 'PoppinsMedium, sans-serif',
      fontWeight: 'normal',
      fontSize: '24px',
      margin: '20px 0',
      color: '#163B6D',
      wordWrap: 'break-word',
      opacity: 0,
      transform: 'translateY(20px)'
    },
    logoSection: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '2rem',
      alignContent: 'center'
    },
    logo: {
      width: '80px',
      height: '80px',
      opacity: 0,
      scale: 0,
      rotation: 180,
      objectFit: 'contain'
    }
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.contentWrapper} ref={containerRef}>
        <div style={styles.textSection}>
          <h1 ref={headingRef} style={styles.heading}></h1>
          <p className="tech-description" style={styles.description}>
            We leverage cutting-edge technologies to build robust and scalable solutions for our clients.
          </p>
        </div>
        <div style={styles.logoSection}>
          {[ReactLogo, AngularLogo, AWSLogo, AzureLogo, MongoLogo, PythonLogo, DjangoLogo, PHPLogo].map((logo, index) => (
            <img 
              key={index}
              src={logo}
              alt={`Technology ${index + 1}`}
              className="logo"
              style={styles.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePageScreenTwo;
