//import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Optional: for external styling

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to the EMS Platform</h1>
      <p>Your one-stop solution for event management.</p>
      <div className="landing-buttons">
        <Link to="/register" className="btn">Get Started</Link>
        <Link to="/login" className="btn-outline">Login</Link>
      </div>
    </div>
  );
};

export default LandingPage;
