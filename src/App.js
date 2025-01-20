import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Navigation/NavBar";
import HomePage from "./HomePage/HomePage";
import Footer from "./Misc/Footer";
import CustomCursor from "./Misc/CustomCursor";
import ServicesPage from "./ServicesPage/ServicesPage";
import ProjectsPage from "./ProjectsPage/ProjectsPage";
import TermsPage from "./Misc/TermsPage";
import PrivacyPolicyPage from "./Misc/PrivacyPolicyPage";
import ContactPage from "./ContactPage/ContactPage";

import { Helmet } from "react-helmet"; // Import react-helmet
import "./Styles/styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Home - My Website</title>
                  <link rel="icon" href="/assets/logo.svg" type="image/svg+xml" />
                </Helmet>
                <HomePage />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Helmet>
                  <title>Our Services - My Website</title>
                  <link rel="icon" href="/assets/logo.svg" type="image/svg+xml" />
                </Helmet>
                <ServicesPage />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <Helmet>
                  <title>Projects - My Website</title>
                  <link rel="icon" href="/assets/logo.svg" type="image/svg+xml" />
                </Helmet>
                <ProjectsPage />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Helmet>
                  <title>Contact Us - My Website</title>
                  <link rel="icon" href="/assets/logo.svg" type="image/svg+xml" />
                </Helmet>
                <ContactPage />
              </>
            }
          />
          <Route
            path="/terms"
            element={
              <>
                <Helmet>
                  <title>Terms & Conditions - My Website</title>
                  <link rel="icon" href="/assets/logo.svg" type="image/svg+xml" />
                </Helmet>
                <TermsPage />
              </>
            }
          />
          <Route
            path="/privacy"
            element={
              <>
                <Helmet>
                  <title>Privacy Policy - My Website</title>
                  <link rel="icon" href="/assets/logo.svg" type="image/svg+xml" />
                </Helmet>
                <PrivacyPolicyPage />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
