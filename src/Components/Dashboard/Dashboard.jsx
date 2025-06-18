// src/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navpage from '../Navpage/Navpage';
import Homepage from '../Homepage/Homepage';



const Dashboard = ({ setAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <button onClick={handleLogout}>Logout</button>
     
     <Homepage/>
    
     
    </div>
  );
};

export default Dashboard;