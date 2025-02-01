// LogoPage.jsx
import React from 'react';
import logo from '../components/assets/images/logo.png'; // Replace with the correct logo path
import './LogoPage.css';

const LogoPage = () => {
  return (
    <div className="logo-page-container">
      <img src={logo} alt="SecureDev Logo" className="logo" />
    </div>
  );
};

export default LogoPage;