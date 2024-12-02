import React from "react";
import { Link } from "react-router-dom";
import logo from '../Images/logo.png'; // Adjust the path as needed
import "./Header.css";

function Header() {
  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <p>Taste the Magic</p>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        {/* Login link positioned on the left */}
        <li className="login-link">
          <Link to="/Login">Login</Link>
        </li>
        
        {/* Other links aligned to the right */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AllFood">All Food</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
