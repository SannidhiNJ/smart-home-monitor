import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/power_consumed">Power Consumed</Link></li>
        <li><Link to="/alert">Alert</Link></li>
        <li><Link to="/login">Login/Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;