import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { gsap } from "gsap";
import "../Styles/styles.css";


function ProjectsPageScreenOne({heading, paragraph}){

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsLoaded(true), 100); // Delay ensures smooth loading
      return () => clearTimeout(timer); // Clean up the timeout
    }, []);
  
    const gradientStyle = {
      backgroundImage:
        "linear-gradient(to left, #163B6D 0%, #5E80AD 17%, #82A3CD 28%, #A6C5ED 55%)",
      backgroundSize: "200% 100%",
      width: "100vw",
      minHeight: "100vh", // Ensures the container takes at least the full height of the viewport
      display: "flex",
      flexDirection: "column",
      animation: "moveBackground 10s linear infinite",
      border: "10px solid #163B6D", // Adding a solid border
      borderRadius: "15px", // Optional, for rounded corners
      boxSizing: "border-box", // Ensures padding and border are included in dimensions
    };
  
    const buttonContainerStyle = {
      display: "flex",
      gap: "20px",
      marginTop: "20px",
    };
  
    return (
      <div
        style={gradientStyle}
        className={`pgscontainer ${isLoaded ? "loaded" : ""}`}
      >
        <div className="content">
          <div style={{ width: "80%", textAlign: "center" }}>
            <h1 className={`pgsheading ${isLoaded ? "fade-in" : ""}`}>{heading}</h1>
            <p className={`pgstext ${isLoaded ? "fade-in" : ""}`}>{paragraph}</p>
          </div>
          <div
            style={buttonContainerStyle}
            className={`button-container ${
              isLoaded ? "fade-in-container" : ""
            }`}
          >
            {/* Add navigation using Link */}
            <Link to="/contact" className="homePagebutton">
              Contact Us
            </Link>
            <Link to="/services" className="homePagebutton">
              See Our Services
            </Link>
          </div>
        </div>
  
        <div className="scroll-down-container">
          <div className="scroll-down-arrow">
            <ion-icon
              name="chevron-down-outline"
              style={{ color: "#163B6D" }}
            ></ion-icon>
          </div>
          <p className="text" style={{ color: "#163B6D" }}>
            Scroll Down
          </p>
        </div>
      </div>
    );
}


export default ProjectsPageScreenOne;