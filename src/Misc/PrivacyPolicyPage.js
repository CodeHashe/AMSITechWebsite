import React from "react";
import PrivacyPolicyPageScreenOne from "./PrivacyPolicyPageScreenOne";

function PrivacyPolicyPage() {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <PrivacyPolicyPageScreenOne 
        heading="Privacy Policy"
        paragraph="We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website. By using our services, you consent to the practices described in this policy."
      />
      <div style={{ padding: "20px" }}>
        <h2 style={{ fontFamily: "MagistralBlack, sans-serif" }}>1. Information We Collect</h2>
        <p>
          We collect information that you provide to us when you sign up for an account, subscribe to our newsletter, or use our services. This includes your name, email address, and any other details you provide.
        </p>
        
        <h2 style={{ fontFamily: "MagistralBlack, sans-serif" }}>2. How We Use Your Information</h2>
        <p>
          Your information is used to provide, personalize, and improve our services. We may also use your data to send promotional emails, newsletters, and other marketing materials unless you opt-out.
        </p>
        
        <h2 style={{ fontFamily: "MagistralBlack, sans-serif" }}>3. Data Security</h2>
        <p>
          We implement various security measures to protect your personal data. This includes encryption, access controls, and regular security audits to prevent unauthorized access or misuse of your information.
        </p>
        
        <h2 style={{ fontFamily: "MagistralBlack, sans-serif" }}>4. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies to enhance your experience on our website. These cookies help us remember your preferences, track usage patterns, and improve the performance of the website.
        </p>
        
        <h2 style={{ fontFamily: "MagistralBlack, sans-serif" }}>5. Third-Party Services</h2>
        <p>
          We may share your data with trusted third parties that help us operate our services, such as payment processors, analytics providers, or email marketing platforms. These third parties are obligated to safeguard your data in accordance with this Privacy Policy.
        </p>
        
        <h2 style={{ fontFamily: "MagistralBlack, sans-serif" }}>6. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal data at any time. If you wish to exercise these rights, please contact us at privacy@ourwebsite.com.
        </p>
        
        <h2 style={{ fontFamily: "MagistralBlack, sans-serif" }}>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you if there are significant changes.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
