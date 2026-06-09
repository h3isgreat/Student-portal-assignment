// ============================================================
// main.jsx
// Application entry point – mounts React into the DOM
// ------------------------------------------------------------
// This file is the starting point of the React app.
// It finds the <div id="root"> in index.html and renders
// the <App /> component inside it.
//
//   TODO (Student 7): Wrap <App /> with a ThemeProvider or
//                     DarkModeContext if you implement dark mode
// ============================================================

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Global stylesheet
import './index.css';

// Root application component
import App from './App.jsx';

// Mount the app into the #root div defined in index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
