import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServicesPage from '../ServicesPage/ServicesPage';
import Services from '../Services/Services';
import './Dashboard.css';

const Dashboard = ({ setAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    navigate('/');
  };

  return (
    <div className="dashboard-container">
       <button className="logout-button" onClick ={handleLogout}>Logout</button>
       
   <ServicesPage/>
   
       
    </div>
  );
};

export default Dashboard;