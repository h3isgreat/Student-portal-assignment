// ============================================================
// StudentCard.jsx
// ASSIGNED TO: Orji Chiagozielam Anthony (@anthony7789) – Student Card Component
// ------------------------------------------------------------
// Your tasks:
//   TODO 1: Display the student's avatar/profile picture
//   TODO 2: Show student name, course, and year of study
//   TODO 3: Add a "View Profile" button that navigates to their profile
//   TODO 4: Add hover animation / shadow effect in CSS
//   TODO 5: Accept props: { name, course, year, avatarUrl }
// ============================================================

import React from 'react';

// StudentCard – a reusable card component for displaying student info
// Props (to be implemented):
//   name      – student's full name
//   course    – enrolled course name
//   year      – year of study (e.g. "Year 2")
//   avatarUrl – URL to the student's profile photo
function StudentCard({ name, course, year, avatarUrl }) {
  return (
    <div className="student-card">
      {/* TODO 1: Render the avatar image using the avatarUrl prop */}
      <div className="student-card-avatar">
        {/* Example:
          <img src={avatarUrl} alt={`${name}'s avatar`} />
        */}
        <div className="avatar-placeholder">👤</div>
      </div>

      {/* TODO 2: Display the student details */}
      <div className="student-card-info">
        <h3 className="student-name">{name || 'Student Name'}</h3>
        <p className="student-course">{course || 'Course not set'}</p>
        <p className="student-year">{year || 'Year not set'}</p>
      </div>

      {/* TODO 3: Add a "View Profile" button using react-router-dom <Link> */}
      <button className="btn btn-primary">
        View Profile
      </button>
    </div>
  );
}

export default StudentCard;
