// src/components/Navbar.js

import React from 'react';
import './NavBar.css'; // Optional if you want to style it

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Internet Offers</h1>
      </div>
      {/* <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#offers">Offers</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul> */}
    </nav>
  );
};

export default Navbar;