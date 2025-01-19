import React, { useRef, useEffect } from "react";
import ReactLogo from "../assets/ReactLogo.svg";
import AndroidLogo from "../assets/icons8-android.svg";
import IOSLogo from "../assets/icons8-swift.svg";
import FlutterLogo from "../assets/icons8-flutter.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ServicesPageScreenThree() {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const iconsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current, // Element that triggers the animation
        start: "top 80%", // Start animation when top of the element reaches 80% of the viewport
        end: "bottom 60%", // End animation when bottom of the element reaches 60% of the viewport
        scrub: 1, // Smoothly animate as the user scrolls
      },
    });

    // Animations for heading and description
    tl.to(headingRef.current, {
      duration: 1.5,
      text: "Innovative App Development Solutions",
      ease: "power1.out",
    }).to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.out",
    });

    // Icons animation
    gsap.fromTo(
      iconsRef.current.children,
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: iconsRef.current, // Trigger animation when icons are in view
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
      }
    );
  }, []);

  const styles = {
    mainContainer: {
      background: "linear-gradient(to right, #A6C5ED, #82A3CD, #5E80AD, #163B6D)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      border: "10px solid #163B6D",
      borderRadius: "15px",
    },
    textSection: {
      textAlign: "center",
      marginBottom: "2rem",
    },
    heading: {
      fontFamily: "MagistralBlack, sans-serif",
      fontSize: "48px",
      margin: "20px 0",
      color: "#163B6D",
    },
    description: {
      fontFamily: "PoppinsMedium, sans-serif",
      fontSize: "20px",
      margin: "20px 0",
      color: "#163B6D",
      opacity: 0,
      transform: "translateY(20px)",
    },
    iconsContainer: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: "2rem",
    },
    icon: {
      width: "80px",
      height: "80px",
      opacity: 0,
      scale: 0.8,
      transition: "transform 0.2s",
      color:"#163B6D"
    },
  };

  return (
    <div style={styles.mainContainer}>
      {/* Text Section */}
      <div style={styles.textSection}>
        <h1 ref={headingRef} style={styles.heading}></h1>
        <p ref={descriptionRef} className="app-description" style={styles.description}>
          Leveraging advanced technologies to craft seamless and efficient mobile app experiences.
        </p>
      </div>

      {/* Icons Section */}
      <div className="app-icons" style={styles.iconsContainer} ref={iconsRef}>
        <img src={ReactLogo} alt="React Native" style={styles.icon} />
        <img src={FlutterLogo} alt="Flutter" style={styles.icon} />
        <img src={AndroidLogo} alt="Android" style={styles.icon} />
        <img src={IOSLogo} alt="iOS" style={styles.icon} />
      </div>
    </div>
  );
}

export default ServicesPageScreenThree;
