
import React, { useState } from 'react';
import FinancialAccounting from '../FinancialAccounting/FinancialAccounting';
import StockIntake from '../StockIntake/StockIntake';
import './ServicesPage.css';




const ServicesPage = () => {
   const [auth, setAuth] = useState(false);

  return (
    <>
    <div className={`services-page ${auth ? 'authenticated' : ''}`}></div>
<h1 className="service-key">Our services</h1>
<div className="service-default">
 <h2>Please select a service</h2>
  <p>Choose from the options above to learn more about our services.</p>
  <FinancialAccounting/>
  <StockIntake/>
 </div>
</>
       
  );
};

export default ServicesPage;