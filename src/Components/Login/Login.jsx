// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Navpage from '../Navpage/Navpage'; 

const Login = ({ setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple authentication check
    if (username === 'admin' && password === 'password') {
      setAuth(true);
      navigate('/Services'); // Navigate to the Services page
    } else if (username === 'user' && password === 'userpass') {
      setAuth(true);
      navigate('/Services'); // Navigate to the Services page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="login-label">Username:</label>
          <input className="login-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="login-label">Password:</label>
          <input className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" type="submit">Login</button>
      </form>
     
    </div>
  );
};

export default Login;