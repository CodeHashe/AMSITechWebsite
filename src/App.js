import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Navigation/NavBar";
import HomePage from "./HomePage/HomePage";
import Footer from "./Misc/Footer";
import CustomCursor from "./Misc/CustomCursor";
import ServicesPage from "./ServicesPage/ServicesPage"; // Example for another route
import ProjectsPage from "./ProjectsPage/ProjectsPage";

import "./Styles/styles.css";

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
