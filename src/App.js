import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Navigation/NavBar";
import HomePage from "./HomePage/HomePage";
import Footer from "./Misc/Footer";
import CustomCursor from "./Misc/CustomCursor";
import ServicesPage from "./ServicesPage/ServicesPage"; // Example for another route
import ProjectsPage from "./ProjectsPage/ProjectsPage";
import TermsPage from "./Misc/TermsPage";
import PrivacyPolicyPage from "./Misc/PrivacyPolicyPage";

import "./Styles/styles.css";
import ContactPage from "./ContactPage/ContactPage";

export default function App() {
  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
