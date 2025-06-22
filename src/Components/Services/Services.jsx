
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './Services.css'; 
import SubNavpage from '../SubNavpage/SubNavpage';
import FinancialAccounting from '../FinancialAccounting/FinancialAccounting';
import StockIntake from '../StockIntake/StockIntake';


const Services = () => {
   const [auth, setAuth] = useState(false);

  return (
    <>
  <SubNavpage/>
    
         <Routes>
          <Route path="FinancialAccounting" element={ <FinancialAccounting />} />
          <Route path="StockIntake" element={ <StockIntake />} />
        </Routes>

</>
       

  );
};

export default Services;