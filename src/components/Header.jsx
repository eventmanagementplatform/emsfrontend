//import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/" className="logo-link">EMS Platform</Link>
            </div>
            <nav className="nav-links">
                <Link to="/register" className="nav-item">Register</Link>
                <Link to="/login" className="nav-item">Login</Link>
                <Link to="/about" className="nav-item">About</Link>
            </nav>
        </header>
    );
};

export default Header;
