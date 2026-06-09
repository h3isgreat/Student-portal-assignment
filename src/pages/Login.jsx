// ============================================================
// Login.jsx
// ASSIGNED TO: Achilonu Great Antonio (@h3isgreat) – Login Page
// ------------------------------------------------------------
// Your tasks:
//   TODO 1: Create a controlled form with email and password fields
//           Use React useState to track form values
//   TODO 2: Add basic client-side validation:
//           – Email must not be empty and must contain "@"
//           – Password must be at least 6 characters
//   TODO 3: Show an error message when validation fails
//   TODO 4: Add a "Forgot Password?" link (no functionality needed)
//   TODO 5: Add a link to the Register page: "Don't have an account?"
//   TODO 6: Style the form using CSS (see index.css)
//   NOTE: Do NOT implement real authentication – keep it frontend only
// ============================================================

import React from 'react';

function Login() {
  // TODO 1: Add state for email, password, and error message
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');
  // const [error, setError] = React.useState('');

  // TODO 2: Implement handleSubmit with validation
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // validate and handle login
  // };

  return (
    <main className="page login-page">
      <div className="form-container">
        <h1 className="form-title">Login</h1>
        <p className="form-subtitle">Sign in to access your student portal</p>

        {/* TODO 3: Show error message here if validation fails */}

        {/* TODO 1: Convert this to a controlled form */}
        <form className="form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            {/* TODO 1: Add value={email} and onChange={(e) => setEmail(e.target.value)} */}
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            {/* TODO 1: Add value={password} and onChange={(e) => setPassword(e.target.value)} */}
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="form-input"
            />
          </div>

          {/* TODO 4: Add "Forgot Password?" link */}

          <button type="submit" className="btn btn-primary btn-full">
            Login
          </button>
        </form>

        {/* TODO 5: Add link to Register page */}
        <p className="form-footer">
          Don&apos;t have an account?{' '}
          <a href="/register">Register here</a>
        </p>
      </div>
    </main>
  );
}

export default Login;
