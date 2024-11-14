import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";
import burguerIcon from "../../assets/icons8-menú-80.png";
import cancelIcon from "../../assets/icons8-eliminar-64.png";

function Navbar() {
  const [isMenuHide, setIsMenuHide] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const handleClick = (e) => {
    e.preventDefault();
    setIsMenuHide(!isMenuHide);
  };

  const handleCloseMenu = () => {
    setIsMenuHide(!isMenuHide);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    // Add an event listener to the window to listen for resize events.
    // Each time the window resizes, handleResize will be called.
    window.addEventListener("resize", handleResize);
    setIsMenuHide(false);
    // Cleanup function to remove the resize event listener when the component
    // is unmounted, preventing memory leaks or unintended behavior.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <nav className="navbar">
      
      <NavLink to="/" onClick={handleCloseMenu}>
        <img src="" alt="logo" />
      </NavLink>

      {isMobile && (
        <button id="menu-btn" onClick={handleClick}>
          {isMenuHide ? (
            <img src={cancelIcon} alt="menu btn" />
          ) : (
            <img src={burguerIcon} alt="menu btn" />
          )}
        </button>
      )}

      {(isMenuHide || !isMobile) && (
        <ul className="navbar-nav" id="menu">
          <NavLink className="nav-item" to="/" onClick={handleCloseMenu}>
            Home
          </NavLink>
          <NavLink className="nav-item" to="/projects">
            Projects
          </NavLink>
          <NavLink className="nav-item" to="/about">
            About
          </NavLink>
          <NavLink className="nav-item" to="/contact">
            Contact
          </NavLink>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
