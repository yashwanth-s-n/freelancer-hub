import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/home">Home</Link></li>
        
        {/* Help Link */}
        <li><Link to="/help">Help</Link></li>
        
        {/* About Link */}
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
