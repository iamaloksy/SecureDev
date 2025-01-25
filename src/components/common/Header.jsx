import React, { useState } from "react";
import LogoImg from "../assets/images/logo.jpg";
import { LinkData } from "../assets/data/dummydata";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import './Header.css'; // Ensure th
import { Link } from 'react-router-dom';
// e case matches exactly

export const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginClick = () => {
    if (location.pathname === '/login') {
      navigate('/'); // Navigate to home page if already on login page
    } else {
      navigate('/login'); // Navigate to the login page
    }
  };

  return (
    <header className='header'>
      <div className='container'>
        < div className='logo'>
        <Link to='/'>
            <button className='logo-btn'>
              <img src={LogoImg} alt='SecureDev' className='logo-img'/>
            </button>
          </Link>
        </div>
        <nav className={`nav ${open ? 'open' : ''}`}>
          <ul className='nav-list'>
            {LinkData.map((link) => (
              <li key={link.id} className='nav-item'>
                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={link.url}>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className='account'>
          <button onClick={handleLoginClick} className='login-btn'>
            <img src="/images/2024644_login_user_avatar_person_users_icon.ico" alt="Login" className='login-icon' />
          </button>
          <button className='menu-btn' onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};