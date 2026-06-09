// ============================================================
// Navbar.jsx
// ASSIGNED TO: Student 1 – Navbar Navigation
// ------------------------------------------------------------
// Your tasks:
//   TODO 1: Add navigation links using <Link> from react-router-dom
//           (Home, Login, Register, Dashboard, Profile)
//   TODO 2: Highlight the currently active link using NavLink
//   TODO 3: Add a site logo / brand name on the left side
//   TODO 4: Style the navbar so it looks polished (see index.css)
// ============================================================

import React from 'react';

// Navbar component – displayed at the top of every page
function Navbar() {
  return (
    <nav className="navbar">
      {/* Brand / Logo area */}
      <div className="navbar-brand">
        {/* TODO 1: Replace the text below with a proper logo or icon */}
        <span className="brand-name">Student Portal</span>
      </div>

      {/* Navigation links */}
      <ul className="navbar-links">
        {/*
          TODO 2: Replace each <li> placeholder below with a proper
          <Link to="..."> or <NavLink to="..."> component.
          Example:
            <li><Link to="/">Home</Link></li>
        */}
        <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>

      {/* TODO 3: Add a hamburger menu button for mobile screens */}
    </nav>
  );
}

export default Navbar;
