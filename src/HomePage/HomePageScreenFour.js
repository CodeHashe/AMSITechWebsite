import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import "../Styles/styles.css";

function HomePageScreenFour() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const featureRefs = useRef([]);
  const buttonRef = useRef(null);

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0 }
    )
      .fromTo(titleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.5")
      .fromTo(headingRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.5")
      .fromTo(descriptionRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.5")
      .fromTo(
        featureRefs.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.2 },
        "-=0.5"
      )
      .fromTo(buttonRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.5");
  }, []);

  const styles = {
    container: {
      background: "linear-gradient(to right, #A6C5ED, #82A3CD, #5E80AD, #163B6D)",
      padding: "6rem",
      borderRadius: "16px",
      maxWidth: "1500px",
      margin: "0 auto",
      textAlign: "center",
      color: "#163B6D",
      fontFamily: "Poppins, sans-serif",
    },
    title: {
      fontFamily: "MagistralBlack, sans-serif",
      fontSize: "22px",
      color: "#516d96",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    mainHeading: {
      fontFamily: "MagistralBlack, sans-serif",
      fontSize: "36px",
      margin: "20px 0",
      fontWeight: "bold",
    },
    description: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "20px",
      margin: "30px auto",
      maxWidth: "800px",
      lineHeight: "1.8",
    },
    features: {
      display: "flex",
      justifyContent: "center",
      gap: "50px",
      marginTop: "40px",
    },
    featureItem: {
      flex: "1",
      maxWidth: "350px",
      textAlign: "center",
    },
    featureIcon: {
      fontSize: "60px",
      marginBottom: "20px",
      color: "#516d96",
    },
    featureTitle: {
      fontFamily: "MagistralBlack, sans-serif",
      fontSize: "22px",
      marginBottom: "15px",
      fontWeight: "bold",
    },
    featureDescription: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "16px",
      color: "#5a6f89",
    },
    button: {
      marginTop: "30px",
      padding: "10px 20px",
      backgroundColor: "transparent",
      color: "#243b53",
      border: "2px solid #243b53",
      borderRadius: "25px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontWeight: "bold",
      fontFamily: "PoppinsMedium, sans-serif", // Use PoppinsMedium for the button text
    },
    buttonHover: {
      backgroundColor: "#243b53",
      color: "white",
    },
  };

  const handleButtonClick = () => {
    navigate("/services"); // Navigate to the /services page
  };

  return (
    <div style={styles.container} ref={containerRef}>
      <h2 style={styles.title} ref={titleRef}>
        Innovate
      </h2>
      <h1 style={styles.mainHeading} ref={headingRef}>
        Why Choose AMSI Tech for Your Digital Needs?
      </h1>
      <p style={styles.description} ref={descriptionRef}>
        At AMSI Tech, we combine expertise and innovation to deliver exceptional digital
        solutions. Our dedicated team is committed to providing unparalleled customer
        support, ensuring your success every step of the way.
      </p>

      <div style={styles.features}>
        {[  
          {
            icon: "🔒",
            title: "Expertise You Can Trust for Digital Success",
            description:
              "Our team consists of industry professionals with years of experience.",
          },
          {
            icon: "⚙️",
            title: "Innovative Solutions Tailored to Your Needs",
            description:
              "We leverage the latest technologies to create custom solutions.",
          },
          {
            icon: "📞",
            title: "Dedicated Customer Support for Your Peace of Mind",
            description:
              "Our support team is available 24/7 to assist you.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            style={styles.featureItem}
            ref={(el) => (featureRefs.current[index] = el)}
          >
            <div style={styles.featureIcon}>{feature.icon}</div>
            <h3 style={styles.featureTitle}>{feature.title}</h3>
            <p style={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>

      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        onClick={handleButtonClick} // Add onClick handler to navigate to /services
        ref={buttonRef}
      >
        See our services
      </button>
    </div>
  );
}

export default HomePageScreenFour;
