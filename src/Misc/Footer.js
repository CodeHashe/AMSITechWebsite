import React from "react";
import Logo from "../assets/newLogo.svg";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "80px 64px",
        background: "white",
        borderTop: "1px solid #163B6D",
        display: "flex",
        flexDirection: "column",
        gap: "80px",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Logo Section */}
        <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
          <img
            src={Logo}
            alt="AMSI Tech Solutions"
            style={{ width: "277px", height: "auto" }}
          />
        </div>

        {/* Quick Links */}
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "black",
              fontFamily: "Roboto",
            }}
          >
            Quick Links
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              fontSize: "14px",
              color: "black",
              fontFamily: "Roboto",
              lineHeight: "21px",
            }}
          >
            <a href="/about" style={{ textDecoration: "none", color: "inherit" }}>
              About Us
            </a>
            <a
              href="/services"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Services
            </a>
            <a
              href="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact
            </a>
            <a
              href="/support"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Support
            </a>
            <a href="/faqs" style={{ textDecoration: "none", color: "inherit" }}>
              FAQs
            </a>
          </div>
        </div>

        {/* Follow Us */}
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "black",
              fontFamily: "Roboto",
            }}
          >
            Follow Us
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              fontSize: "14px",
              color: "black",
              fontFamily: "Roboto",
              lineHeight: "21px",
            }}
          >
            <a
              href="https://facebook.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Instagram
            </a>
            <a
              href="https://youtube.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid black",
          paddingTop: "32px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "14px",
            fontFamily: "Roboto",
            color: "black",
          }}
        >
          <span>© 2024 AMSI Tech. All rights reserved.</span>
          <a
            href="/privacy-policy"
            style={{ textDecoration: "underline", color: "inherit" }}
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            style={{ textDecoration: "underline", color: "inherit" }}
          >
            Terms of Service
          </a>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <a href="https://facebook.com">
            <i className="fab fa-facebook" style={{ fontSize: "24px" }}></i>
          </a>
          <a href="https://twitter.com">
            <i className="fab fa-twitter" style={{ fontSize: "24px" }}></i>
          </a>
          <a href="https://linkedin.com">
            <i className="fab fa-linkedin" style={{ fontSize: "24px" }}></i>
          </a>
          <a href="https://instagram.com">
            <i className="fab fa-instagram" style={{ fontSize: "24px" }}></i>
          </a>
          <a href="https://youtube.com">
            <i className="fab fa-youtube" style={{ fontSize: "24px" }}></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
