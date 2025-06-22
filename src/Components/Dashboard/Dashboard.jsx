import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; 
import Services from '../Services/Services'; 
import StockIntake from '../StockIntake/StockIntake';




const Dashboard = ({ setAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    navigate('/');
  };

  return (
    <div className="dashboard-container">
       <button onClick={handleLogout}>Logout</button>
       <Services/>
       <StockIntake/>
       
    </div>
  );
};

export default Dashboard;