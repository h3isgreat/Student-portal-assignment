import React, { useState } from 'react';

function Login() {
  // TODO 1: Add state for email, password, and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // TODO 2: Implement handleSubmit with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Email validation: must not be empty and must contain "@"
    if (!email || !email.includes('@')) {
      setError('Email must not be empty and must contain "@"');
      return;
    }

    // Password validation: must be at least 6 characters
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // Clear error if validation passes
    setError('');
    
    // NOTE: Real authentication is not implemented (frontend only)
    console.log('Form submitted successfully:', { email, password });
    alert('Logged in successfully! (Frontend Only)');
  };

  return (
    <main className="page login-page">
      <div className="form-container">
        <h1 className="form-title">Login</h1>
        <p className="form-subtitle">Sign in to access your student portal</p>

        {/* TODO 3: Show error message here if validation fails */}
        {error && <p className="error-message" style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}

        {/* TODO 1: Convert this to a controlled form */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            {/* TODO 1: Add value={email} and onChange */}
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            {/* TODO 1: Add value={password} and onChange */}
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* TODO 4: Add "Forgot Password?" link */}
          <div style={{ marginBottom: '1rem', textAlign: 'right' }}>
            <a href="#forgot" className="forgot-password-link" onClick={(e) => e.preventDefault()}>
              Forgot Password?
            </a>
          </div>

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
