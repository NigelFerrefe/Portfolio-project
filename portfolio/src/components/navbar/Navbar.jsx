import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
function Navbar() {
  const [isMenuHide, setIsMenuHide] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsMenuHide(!isMenuHide);
  };

  const handleCloseMenu = () => {
    setIsMenuHide(false);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" onClick={handleCloseMenu}>
        <img src="" alt="logo" />
      </NavLink>

      <label
        htmlFor="menu-toggle"
        className={`menu-btn ${isMenuHide ? "close-menu" : ""}`}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </label>

      <ul
        className={`navbar-nav ${isMenuHide ? "menu-visible" : ""}`}
        id="menu"
      >
        <div className="li-container">
          <li>
            <NavLink className="nav-item" to="/" onClick={handleCloseMenu}>
              <h1>Home</h1>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/projects">
              <h1>Projects</h1>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/portfolio">
              <h1>3D Projects</h1>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/about">
              <h1>About</h1>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/contact">
              <h1>Contact</h1>
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
