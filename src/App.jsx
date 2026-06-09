// ============================================================
// App.jsx
// Main application component – sets up routing and layout
// ------------------------------------------------------------
// This file wires together all pages and components.
//
//   TODO (Nnadozie @teddyfx33): Update the <Navbar /> to use proper
//                      <NavLink> components after you implement them
//   TODO (Nwachukwu @izuchukwun22-byte): Add a dark mode context/provider here
//                      and wrap the app with it
//   TODO (General):    Add a 404 / Not Found route at the bottom
// ============================================================

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page components
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

function App() {
  return (
    // Router enables client-side navigation between pages
    <Router>
      <div className="app-wrapper">

        {/* Navbar is shown on every page */}
        <Navbar />

        {/* Main content area – renders the current page */}
        <div className="content-area">
          <Routes>
            {/* Home page – the default route */}
            <Route path="/" element={<Home />} />

            {/* Authentication pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected pages (no auth guard yet – Student 3/4 can add one) */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />

            {/* TODO: Add a <Route path="*" element={<NotFound />} /> here */}
          </Routes>
        </div>

        {/* Footer is shown on every page */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
