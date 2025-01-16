import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FacebookLogo from "../assets/FacebookLogo.svg";
import GoogleLogo from "../assets/GoogleLogo.svg";
import InstagramLogo from "../assets/InstagramLogo.svg";
import YoutubeLogo from "../assets/YoutubeLogo.svg";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

function HomePageScreenThree() {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Create separate timelines for each animation
    const headingTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "center center",
        toggleActions: "play none none reverse"
      }
    });

    const descriptionTl = gsap.timeline({
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: "top 80%",
        end: "center center",
        toggleActions: "play none none reverse"
      }
    });

    const logosTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".logo-section",
        start: "top 80%",
        end: "center center",
        toggleActions: "play none none reverse"
      }
    });

    // Heading animation
    headingTl.fromTo(headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    ).to(headingRef.current, {
      duration: 2,
      text: "Transform Your Brand with Our Comprehensive Social Media Development Services"
    });

    // Description animation
    descriptionTl.fromTo(descriptionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Logos animation
    logosTl.fromTo('.logo',
      { scale: 0, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        ease: "back.out(1.7)"
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const styles = {
    mainContainer: {
      background: 'linear-gradient(to right, #A6C5ED, #82A3CD, #5E80AD, #163B6D)',
      minHeight: '100vh',
      padding: '4rem',
      border: '10px solid #163B6D',
      borderRadius: '15px'
    },
    contentWrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center'
    },
    heading: {
      fontFamily: 'MagistralBlack, sans-serif',
      fontSize: '56px',
      color: '#163B6D',
      opacity: 0
    },
    description: {
      fontFamily: 'PoppinsMedium, sans-serif',
      fontSize: '24px',
      color: '#163B6D',
      margin: '2rem 0',
      opacity: 0
    },
    logoSection: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: '4rem'
    },
    logo: {
      width: '100px',
      height: '100px',
      opacity: 0
    }
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.contentWrapper} ref={containerRef}>
        <h1 ref={headingRef} style={styles.heading}></h1>
        <p ref={descriptionRef} style={styles.description}>
          Our social media development services encompass strategic planning, engaging content creation, and insightful analytics. We help you build a strong online presence that resonates with your audience and drives results.
        </p>
        <div className="logo-section" style={styles.logoSection}>
          {[FacebookLogo, GoogleLogo, InstagramLogo, YoutubeLogo].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Social Media Logo ${index + 1}`}
              className="logo"
              style={styles.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePageScreenThree;