import React, { useState } from 'react';
import { useNavigate, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { post, API_URL } from "../actions/baseAction";

const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLoginClick = (event) => {
    event.preventDefault();
    props.handleLoginClick(formData);
  };

  if (props.message && props.message === "Login successful") {
    return (<Redirect to="/" />);
  }

  return (
    <div className="signup-form" style={{ backgroundColor: "white", color: "black", height: "400px", padding: "20px", borderRadius: "5px", width: "350px" }}>
      <center><img src="images/avatar.png" width="40%" style={{ borderRadius: "50%" }} alt="" /></center><br />
      <div className="form-group">
        <input type="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <input type="password" value={formData.password} onChange={handleChange} className="form-control" placeholder="Password" id="password" name="password" required />
      </div>
      <div className="form-group">
        <input type="submit" value="LogIn" onClick={handleLoginClick} className="btn btn-primary" /> &nbsp;&nbsp; Don't have an account? <a className="btn btn-outline-primary" href="/signup"><b>Sign Up</b></a>
      </div>
      <div className="form-group">
        <span id="message" name="message">{
          props.messageLog && props.messageLog.message
            ? props.messageLog.message : null
        }</span>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    messageLog: state.userReducer.messageLog
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleLoginClick: (user) => {
      if (!(user.email && user.password)) {
        alert("Please enter Email and Password!!");
        return;
      }

      return post(`${API_URL}/login`, user)
        .then((result) => {
          if (result.loggedInUser) {
            dispatch({ type: "LOGIN-USER", payload: result.loggedInUser });
          } else {
            dispatch({ type: "LOGIN-USER", payload: result });
          }
        })
        .catch((err) => {
          console.log('./src/pages/loginForm.jsx => mapDispatchToProps => postLogin()', err);
        })
    }
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(LoginForm);