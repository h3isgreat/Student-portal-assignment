// ============================================================
// Register.jsx
// ASSIGNED TO: Student 4 – Registration Page
// ------------------------------------------------------------
// Your tasks:
//   TODO 1: Create a controlled form with the following fields:
//           – Full Name
//           – Email
//           – Password
//           – Confirm Password
//           – Course / Program
//   TODO 2: Add client-side validation:
//           – All fields must be filled
//           – Email must contain "@"
//           – Password must be at least 6 characters
//           – Password and Confirm Password must match
//   TODO 3: Show an inline error message when validation fails
//   TODO 4: Show a success message when all fields are valid
//   TODO 5: Add a link to the Login page: "Already have an account?"
//   TODO 6: Style the form using CSS (see index.css)
//   NOTE: Do NOT implement real backend registration
// ============================================================

import React from 'react';

function Register() {
  // TODO 1: Add state for each form field
  // const [formData, setFormData] = React.useState({
  //   name: '', email: '', password: '', confirmPassword: '', course: '',
  // });
  // const [error, setError] = React.useState('');
  // const [success, setSuccess] = React.useState(false);

  // TODO 2: Implement handleSubmit with validation
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // validate fields here
  // };

  return (
    <main className="page register-page">
      <div className="form-container">
        <h1 className="form-title">Create Account</h1>
        <p className="form-subtitle">Join the Student Portal today</p>

        {/* TODO 3: Render error message here */}
        {/* TODO 4: Render success message here */}

        {/* TODO 1: Make this a controlled form with onSubmit={handleSubmit} */}
        <form className="form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Jane Doe"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="course" className="form-label">Course / Program</label>
            <input
              id="course"
              type="text"
              placeholder="e.g. Computer Science"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              type="password"
              placeholder="At least 6 characters"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Repeat your password"
              className="form-input"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            Register
          </button>
        </form>

        {/* TODO 5: Add link to Login page */}
        <p className="form-footer">
          Already have an account?{' '}
          <a href="/login">Login here</a>
        </p>
      </div>
    </main>
  );
}

export default Register;
