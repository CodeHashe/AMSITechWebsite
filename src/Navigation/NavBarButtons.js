import { Link } from "react-router-dom"; // Import Link from React Router
import Logo from "../assets/newLogo.svg";
import HomePage from "../HomePage/HomePage";
import ServicesPage from "../ServicesPage/ServicesPage";

function NavBarButtons() {
  return (
    <nav className="navBar">
      <div className="navContent">
        <img src={Logo} alt="Company Logo" className="logo-image" />
        <div className="navButtons">
          {/* Replace href with React Router's Link to for routing */}
          <Link to="/" className="text">
            Home Page
          </Link>
          <Link to="/services" className="text">
            Our Services
          </Link>
          <div className="dropdown">
            <Link to="/about" className="text">
              About Us
            </Link>
            <div className="dropdown-menu">
              <Link to="/contact" className="dropdown-item">
                Contact Us
              </Link>
              <Link to="/projects" className="dropdown-item">
                Our Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarButtons;
