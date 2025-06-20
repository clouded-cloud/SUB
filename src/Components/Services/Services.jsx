import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Services.css'; 




const Services = ({ setAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    navigate('/');
  };

  return (
    <div className="services-container">
      <button onClick={handleLogout}>Logout</button>
        <h1>Our services</h1>
            <ul>
                <Link to="/FinancialAccounting">Financial Accounting</Link>
                <Link to="/StockIntake">Stock Intake</Link>
            </ul>
    </div>
  );
};

export default Services;