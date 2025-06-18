import React from 'react';
import { useNavigate } from 'react-router-dom';




const Services = ({ setAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <button onClick={handleLogout}>Logout</button>
     
    <Services/>
    </div>
  );
};

export default Services;