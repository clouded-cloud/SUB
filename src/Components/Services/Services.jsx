import React from 'react';
import { useNavigate } from 'react-router-dom';




const Services = ({ setAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    navigate('/');
  };

  return (
    <div className="services-container">
      <button onClick={handleLogout}>Logout</button>
   
    </div>
  );
};

export default Services;