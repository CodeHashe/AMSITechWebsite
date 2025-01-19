import React, { useRef, useEffect } from "react";
import FacebookLogo from "../assets/icons8-facebook (1).svg";
import InstagramLogo from "../assets/icons8-instagram.svg";
import LinkedInLogo from "../assets/icons8-linkedin.svg";
import TwitterLogo from "../assets/icons8-twitter.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ServicesPageScreenFour() {
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
      text: "Creative Social Media Development",
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
    },
  };

  return (
    <div style={styles.mainContainer}>
      {/* Text Section */}
      <div style={styles.textSection}>
        <h1 ref={headingRef} style={styles.heading}></h1>
        <p ref={descriptionRef} className="social-description" style={styles.description}>
          Empowering your brand with engaging and dynamic social media strategies.
        </p>
      </div>

      {/* Icons Section */}
      <div className="social-icons" style={styles.iconsContainer} ref={iconsRef}>
        <img src={FacebookLogo} alt="Facebook" style={styles.icon} />
        <img src={InstagramLogo} alt="Instagram" style={styles.icon} />
        <img src={TwitterLogo} alt="Twitter" style={styles.icon} />
        <img src={LinkedInLogo} alt="LinkedIn" style={styles.icon} />
      </div>
    </div>
  );
}

export default ServicesPageScreenFour;
