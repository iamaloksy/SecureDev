import React, { useState } from 'react';
import axios from 'axios';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './loginform.css'; // Ensure the case matches exactly

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: ''
  });
  const [isRegistering, setIsRegistering] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email: formData.email,
        password: formData.password
      });
      if (response.data.message === 'Login successful') {
        setMessage('Login successful');
        setShowWelcome(true);
        setTimeout(() => {
          setShowWelcome(false);
          setMessage('');
        }, 3000);
      } else {
        setMessage('Invalid email or password');
      }
    } catch (error) {
      setMessage('Error logging in');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password
      });
      if (response.status === 201) {
        setMessage('User registered successfully');
        setIsRegistering(false);
      } else {
        setMessage('Error registering user');
      }
    } catch (error) {
      setMessage('Error registering user');
    }
  };

  const handleGoogleLoginSuccess = async (response) => {
    try {
      const res = await axios.post('http://localhost:5000/api/google-login', {
        token: response.credential
      });
      if (res.data.message === 'Login successful') {
        setMessage('Login successful');
        setShowWelcome(true);
        setTimeout(() => {
          setShowWelcome(false);
          setMessage('');
        }, 3000);
      } else {
        setMessage('Error logging in with Google');
      }
    } catch (error) {
      setMessage('Error logging in with Google');
    }
  };

  const handleGoogleLoginFailure = (response) => {
    setMessage('Google login failed');
  };

  return (
    <GoogleOAuthProvider clientId="35768457097-iuf1kr8p1cehe54a73n6cj5jjv3dh845.apps.googleusercontent.com">
      <div className="login-form">
        {showWelcome ? (
          <div className="welcome-message">
            <h2>Welcome!</h2>
          </div>
        ) : (
          <>
            <center><img src="/images/avatar.png" width="40%" alt="" /></center><br />
            <form onSubmit={isRegistering ? handleRegister : handleLogin}>
              {isRegistering && (
                <div className="form-group">
                  <input type="text" value={formData.fullName} onChange={handleChange} className="form-control" placeholder="Full Name" id="fullName" name="fullName" required />
                </div>
              )}
              <div className="form-group">
                <input type="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <input type="password" value={formData.password} onChange={handleChange} className="form-control" placeholder="Password" id="password" name="password" required />
              </div>
              <div className="form-group">
                <input type="submit" value={isRegistering ? "Sign Up" : "Log In"} className="btn btn-primary" />
              </div>
            </form>
            <div className="form-group">
              <button onClick={() => setIsRegistering(!isRegistering)} className="btn btn-secondary">
                {isRegistering ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
              </button>
            </div>
            <div className="form-group">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginFailure}
              />
            </div>
            {message && <div className="message">{message}</div>}
          </>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginForm;