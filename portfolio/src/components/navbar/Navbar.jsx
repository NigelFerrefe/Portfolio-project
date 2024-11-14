import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar-container">
        <NavLink to="/">
        <img src="" alt="" />
        </NavLink>
        <ul className="nav-links-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </ul>
        
      </nav>
    </>
  );
}
export default Navbar;
