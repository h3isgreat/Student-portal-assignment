// ============================================================
// Home.jsx
// Shared page – gives students an overview of the project
// ------------------------------------------------------------
// No specific student assignment – this file is the landing
// page. Students may enhance it as part of their own tasks.
//
//   TODO (General): Improve the visual layout of this page
//   TODO (Student 8): Import and use the <StudentCard /> component
//                     to display a sample list of students
//   TODO (Student 9): Ensure this page is fully responsive on
//                     small screens
// ============================================================

import React from 'react';

// List of pending tasks shown to students on the home page
const pendingTasks = [
  { id: 1, student: 'Nnadozie Chibuikem Thaddeus (@teddyfx33)', task: 'Implement Navbar navigation with React Router links' },
  { id: 2, student: 'Osuji McDonald Chiemela (@donalddev1)', task: 'Design and style the Footer component' },
  { id: 3, student: 'Achilonu Great Antonio (@h3isgreat)', task: 'Build the Login page with a form and validation' },
  { id: 4, student: 'Nwauwa Divine-Promises (@Divinepromises)', task: 'Build the Registration page with a form and validation' },
  { id: 5, student: 'Chukwuebuka Chibundu Chidiebere (@ebukachidiebere050-bit)', task: 'Create the Dashboard UI with student stats' },
  { id: 6, student: 'Oparaeke George Chinomso (@George-70)', task: 'Build the Profile page with editable fields' },
  { id: 7, student: 'Nwachukwu Izuchukwu (@izuchukwun22-byte)', task: 'Implement a Dark Mode toggle across the app' },
  { id: 8, student: 'Orji Chiagozielam Anthony (@anthony7789)', task: 'Complete the StudentCard component with full props' },
  { id: 9, student: 'Amuzie Petra (@Petracutte)', task: 'Make the entire app mobile-responsive' },
  { id: 10, student: 'Ahaneku Alexander Ugochukwu (@Melloyung)', task: 'Write professional README documentation' },
];

function Home() {
  return (
    <main className="page home-page">
      {/* Hero / Welcome section */}
      <section className="hero">
        <h1 className="hero-title">Student Portal</h1>
        <p className="hero-subtitle">
          Welcome to the Student Portal — a collaborative project for learning
          Git and GitHub through real code contributions.
        </p>
        <p className="hero-description">
          Each student has been assigned a specific feature to implement. Browse
          the task list below, check out your branch, and open a Pull Request
          when you are done!
        </p>
      </section>

      {/* Pending tasks section */}
      <section className="tasks-section">
        <h2 className="section-title">📋 Pending Student Tasks</h2>
        <p className="section-subtitle">
          The following features are waiting to be implemented. Find your task,
          create a branch, and submit a PR.
        </p>

        <ul className="task-list">
          {pendingTasks.map((item) => (
            <li key={item.id} className="task-item">
              <span className="task-student">{item.student}</span>
              <span className="task-description">{item.task}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* TODO (Student 8): Add a section below that renders <StudentCard /> components */}
      {/* Example:
        <section className="students-section">
          <h2>Meet the Team</h2>
          <div className="cards-grid">
            <StudentCard name="Alice" course="Computer Science" year="Year 2" />
          </div>
        </section>
      */}
    </main>
  );
}

export default Home;
