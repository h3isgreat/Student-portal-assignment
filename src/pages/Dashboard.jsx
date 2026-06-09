// ============================================================
// Dashboard.jsx
// ASSIGNED TO: Chukwuebuka Chibundu Chidiebere (@ebukachidiebere050-bit) – Dashboard UI
// ------------------------------------------------------------
// Your tasks:
//   TODO 1: Display a welcome greeting using the student's name
//           (hardcode a name for now – no auth needed)
//   TODO 2: Add a stats row with at least 3 stat cards:
//           – Courses Enrolled
//           – Assignments Due
//           – GPA / Grade Average
//   TODO 3: Add a "Recent Activity" section with a list of mock activities
//   TODO 4: Add a "Quick Links" section with links to other pages
//   TODO 5: Style the dashboard layout using CSS grid or flexbox
//   TODO 6: (Bonus) Add a simple progress bar for each course
// ============================================================

import React from 'react';

// Mock data – replace or extend this as needed
const mockStats = [
  { label: 'Courses Enrolled', value: '—' },
  { label: 'Assignments Due', value: '—' },
  { label: 'GPA', value: '—' },
];

const mockActivities = [
  // TODO 3: Add real activity objects here, e.g.:
  // { id: 1, text: 'Submitted Assignment 1', date: 'Jun 1, 2024' },
];

function Dashboard() {
  return (
    <main className="page dashboard-page">
      {/* TODO 1: Replace "Student" with the logged-in user's name */}
      <h1 className="page-title">Welcome back, Student 👋</h1>
      <p className="page-subtitle">Here is your overview for today.</p>

      {/* Stats row */}
      <section className="stats-section">
        <h2 className="section-title">Your Stats</h2>
        {/* TODO 2: Implement stat cards below */}
        <div className="stats-grid">
          {mockStats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Recent activity */}
      <section className="activity-section">
        <h2 className="section-title">Recent Activity</h2>
        {mockActivities.length === 0 ? (
          <p className="placeholder-text">
            No recent activity yet.{' '}
            {/* TODO 3: Remove this message once you add mock activities */}
          </p>
        ) : (
          <ul className="activity-list">
            {mockActivities.map((activity) => (
              <li key={activity.id} className="activity-item">
                {activity.text}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Quick links */}
      <section className="quick-links-section">
        <h2 className="section-title">Quick Links</h2>
        {/* TODO 4: Replace <a> tags with proper <Link> from react-router-dom */}
        <div className="quick-links">
          <a href="/profile" className="btn btn-secondary">My Profile</a>
          <a href="/" className="btn btn-secondary">Home</a>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
