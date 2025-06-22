
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import SubNavpage from '../SubNavpage/SubNavpage';
import FinancialAccounting from '../FinancialAccounting/FinancialAccounting';
import StockIntake from '../StockIntake/StockIntake';
import Services from '../Services/Services';



const ServicesPage = () => {
   const [auth, setAuth] = useState(false);

  return (
    <>
    <div className={`services-page ${auth ? 'authenticated' : ''}`}></div>
<h1>Our services</h1>
<SubNavpage className="sub-nav" />
 

 
    
         <Routes>
          <Route path="FinancialAccounting" element={ <FinancialAccounting />} />
          <Route path="StockIntake" element={ <StockIntake />} />
        <Route index element={
           <div className="service-default">
              <h2>Please select a service</h2>
              <p>Choose from the options above to learn more about our services.</p>
            </div>
          } />
           </Routes>
</>
       
  );
};

export default ServicesPage;