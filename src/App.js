import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import JobDetails from './components/JobDetails';
import './App.css';
import ApplicationForm from './components/ApplicationForm';
import HelpPage from './components/HelpPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import About from './components/About'; // Import About component
import './components/Navbar.css';

function App() {
  // Check if the user is authenticated by checking for a token in localStorage
  const isAuthenticated = localStorage.getItem('token') !== null;

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/job/:id" element={isAuthenticated ? <JobDetails /> : <Navigate to="/login" />} />
          <Route path="/apply/:id" element={isAuthenticated ? <ApplicationForm /> : <Navigate to="/login" />} />
          <Route path="/help/:id" element={isAuthenticated ? <HelpPage /> : <Navigate to="/login" />} />
          <Route path="/help" element={isAuthenticated ? <HelpPage /> : <Navigate to="/login" />} />
          <Route path="/about" element={<About />} /> {/* Add About route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
