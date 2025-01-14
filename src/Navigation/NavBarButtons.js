import Logo from "../assets/newLogo.svg";

function NavBarButtons() {
  return (
    <nav className="navBar">
      <div className="navContent">
        <img src={Logo} alt="Company Logo" className="logo-image" />
        <div className="navButtons">
          <a href="#home" className="text">
            Home Page
          </a>
          <a href="#services" className="text">
            Our Services
          </a>
          <div className="dropdown">
            <a href="#about" className="text">
              About Us
            </a>
            <div className="dropdown-menu">
              <a href="#contact" className="dropdown-item">
                Contact Us
              </a>
              <a href="#projects" className="dropdown-item">
                Our Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarButtons;
