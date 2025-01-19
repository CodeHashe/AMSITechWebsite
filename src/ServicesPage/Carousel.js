import React from "react";
import "../Styles/styles.css"; // Import the styles

// Import technology logos
import ReactLogo from "../assets/ReactLogo.svg";
import AngularLogo from "../assets/AngularLogo.svg";
import AWSLogo from "../assets/AWSLogo.svg";
import AzureLogo from "../assets/AzureLogo.svg";
import PythonLogo from "../assets/PythonLogo.svg";
import DjangoLogo from "../assets/DjangoLogo.svg";
import PHPLogo from "../assets/PHPLogo.svg";
import LaravelLogo from "../assets/LaravelLogo.svg";



const techLogos = [
  { src: ReactLogo, alt: "React" },
  { src: AngularLogo, alt: "Angular" },
  { src: AWSLogo, alt: "AWS" },
  { src: AzureLogo, alt: "Azure" },
  { src: PythonLogo, alt: "Python" },
  { src: DjangoLogo, alt: "Django" },
  { src: PHPLogo, alt: "PHP" },
  { src: LaravelLogo, alt: "Laravel" },
];

function Carousel() {
  return (
    <div className="carousel-container">
      <div className="carousel">
        {/* Duplicate logos for smooth animation */}
        {techLogos.concat(techLogos).map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="carousel-logo"
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;

