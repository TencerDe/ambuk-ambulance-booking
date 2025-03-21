import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Import CSS

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Ambuk</Link>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Nav Links */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link></li>
        <li><Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link></li>
        <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
