// src/components/Navbar.js
import React from 'react';
import { useStore } from '../../context/Store';
import './NavBar.css'; // Optional if you want to style it

const Navbar = () => {
  const { state } = useStore();
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Internet Offers</h1>
      </div>
      <p className="selected-offer">{state?.plan?.speed ? state?.plan?.speed : null}</p>
    </nav>
  );
};

export default Navbar;