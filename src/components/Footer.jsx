// ============================================================
// Footer.jsx
// ASSIGNED TO: Osuji McDonald Chiemela (@donalddev1) – Footer Design
// ------------------------------------------------------------
// Your tasks:
//   TODO 1: Add copyright text with the current year
//   TODO 2: Add links to social media or GitHub profile
//   TODO 3: Add a "Back to top" button that scrolls the page up
//   TODO 4: Style the footer using CSS (see index.css)
//   TODO 5: Make the footer sticky (always at the bottom of the page)
// ============================================================

import React from 'react';

// Footer component – displayed at the bottom of every page
function Footer() {
  return (
    <footer className="footer">
      {/* TODO 1: Replace with dynamic year using new Date().getFullYear() */}
      <p className="footer-text">
        &copy; 2024 Student Portal. All rights reserved.
      </p>

      {/* TODO 2: Add social / GitHub links here */}
      <div className="footer-links">
        {/* Example:
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        */}
        <span className="footer-placeholder">Links coming soon...</span>
      </div>

      {/* TODO 3: Implement a "Back to top" button */}
    </footer>
  );
}

export default Footer;
