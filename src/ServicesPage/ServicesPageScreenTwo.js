import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Carousel from "./Carousel";

function ServicesPageScreenTwo() {
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      const tl = gsap.timeline();

      tl.to(headingRef.current, {
        duration: 2,
        text: "Web Development",
        ease: "none",
      })
        .to(".tech-description", {
          opacity: 1,
          y: 0,
          duration: 1,
        })
        .to(".logo", {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.5,
          stagger: 0.2,
        });

      tl.eventCallback("onComplete", () => setHasAnimated(true));

      return () => tl.kill();
    }
  }, [hasAnimated]);

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
      marginBottom: "2rem", // Space between text and carousel
    },
    heading: {
      fontFamily: "MagistralBlack, sans-serif",
      fontSize: "56px",
      margin: "20px 0",
      color: "#163B6D",
    },
    description: {
      fontFamily: "PoppinsMedium, sans-serif",
      fontSize: "24px",
      margin: "20px 0",
      color: "#163B6D",
      opacity: 0,
      transform: "translateY(20px)",
    },
    carouselWrapper: {
      width: "100%",
    },
  };

  return (
    <div style={styles.mainContainer}>
      {/* Text Section */}
      <div style={styles.textSection}>
        <h1 ref={headingRef} style={styles.heading}></h1>
        <p className="tech-description" style={styles.description}>
          Here are all the technologies we use to produce high quality and productive websites that inspire your idea and bring your vision to life.
        </p>
      </div>

      {/* Carousel */}
      <div style={styles.carouselWrapper}>
        <Carousel />
      </div>
    </div>
  );
}

export default ServicesPageScreenTwo;
