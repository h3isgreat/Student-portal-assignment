// ============================================================
// Profile.jsx
// ASSIGNED TO: Student 6 – Profile Page
// ------------------------------------------------------------
// Your tasks:
//   TODO 1: Display a profile avatar / photo placeholder
//   TODO 2: Show student details: name, email, course, year, bio
//   TODO 3: Add an "Edit Profile" toggle that turns details into
//           editable input fields when clicked
//   TODO 4: Add a "Save Changes" button (no backend needed – just
//           update local state)
//   TODO 5: Style the profile page nicely with CSS
//   TODO 6: (Bonus) Add an "Upload Photo" button placeholder
// ============================================================

import React from 'react';

// Mock profile data – replace with real data later
const defaultProfile = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  course: 'Computer Science',
  year: 'Year 2',
  bio: 'Add a short bio here...',
};

function Profile() {
  // TODO 3: Add state to toggle between view mode and edit mode
  // const [isEditing, setIsEditing] = React.useState(false);
  // const [profile, setProfile] = React.useState(defaultProfile);

  return (
    <main className="page profile-page">
      <h1 className="page-title">My Profile</h1>

      <div className="profile-card">
        {/* TODO 1: Avatar / photo area */}
        <div className="profile-avatar">
          {/* TODO 6: Add an upload button */}
          <div className="avatar-large">👤</div>
        </div>

        {/* TODO 2: Profile details */}
        <div className="profile-details">
          <div className="profile-field">
            <span className="field-label">Name</span>
            {/* TODO 3: In edit mode, replace <span> with <input> */}
            <span className="field-value">{defaultProfile.name}</span>
          </div>

          <div className="profile-field">
            <span className="field-label">Email</span>
            <span className="field-value">{defaultProfile.email}</span>
          </div>

          <div className="profile-field">
            <span className="field-label">Course</span>
            <span className="field-value">{defaultProfile.course}</span>
          </div>

          <div className="profile-field">
            <span className="field-label">Year</span>
            <span className="field-value">{defaultProfile.year}</span>
          </div>

          <div className="profile-field">
            <span className="field-label">Bio</span>
            <span className="field-value">{defaultProfile.bio}</span>
          </div>
        </div>

        {/* TODO 3: Toggle edit mode */}
        <div className="profile-actions">
          <button className="btn btn-primary">
            {/* TODO 3: Change label based on isEditing state */}
            Edit Profile
          </button>
          {/* TODO 4: Show "Save Changes" button only in edit mode */}
        </div>
      </div>
    </main>
  );
}

export default Profile;
