import React from "react";
import TermsPageScreenOne from "./TermsPageScreenOne";

function TermsPage() {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <TermsPageScreenOne 
        heading="Terms and Conditions"
        paragraph="Welcome to the terms and conditions for our services. These terms and conditions outline the rules and regulations for the use of our services. By utilizing our services, we assume you accept these terms and conditions. Do not continue to use our website or services if you do not agree to take all of the terms and conditions stated on this page."
      />
      <div style={{ padding: "20px" }}>
        <h2 style={{ fontFamily: "MagistralBlack, sans-serif" }}>1. Introduction</h2>
        <p>
          By accessing our website, you agree to comply with the terms outlined in this document. If you disagree with any part of the terms, please do not use our services.
        </p>
        
        <h2 style={{ fontFamily: "MagistralBlack, sans-serif" }}>2. License to Use the Website</h2>
        <p>
          We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal or commercial purposes in accordance with these terms.
        </p>
        
        <h2 style={{ fontFamily: "MagistralBlack, sans-serif" }}>3. User Responsibilities</h2>
        <p>
          As a user, you agree to refrain from using our website in any unlawful manner. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
        </p>
        
        <h2 style={{ fontFamily: "MagistralBlack, sans-serif" }}>4. Prohibited Activities</h2>
        <p>
          You are prohibited from engaging in activities that could harm or disrupt the website’s services, including but not limited to attempting to gain unauthorized access to the system, transmitting harmful content, or violating intellectual property rights.
        </p>
        
        <h2 style={{ fontFamily: "MagistralBlack, sans-serif" }}>5. Privacy Policy</h2>
        <p>
          We respect your privacy. For more information, please refer to our <a href="/privacy-policy" style={{ textDecoration: "none", color: "#163B6D" }}>Privacy Policy</a>, which outlines how we collect, use, and protect your personal data.
        </p>
        
        <h2 style={{ fontFamily: "MagistralBlack, sans-serif" }}>6. Limitation of Liability</h2>
        <p>
          We are not liable for any damages arising from the use of our services or website, including but not limited to any direct, indirect, incidental, or consequential damages.
        </p>
        
        <h2 style={{ fontFamily: "MagistralBlack, sans-serif" }}>7. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to our website if you breach any of the terms and conditions outlined in this document.
        </p>
        
        <h2 style={{ fontFamily: "MagistralBlack, sans-serif" }}>8. Changes to the Terms</h2>
        <p>
          We may modify these terms from time to time. All updates will be posted on this page, and we will notify users if any significant changes occur.
        </p>
      </div>
    </div>
  );
}

export default TermsPage;
