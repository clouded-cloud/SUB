import React from 'react'
import { Link } from 'react-router-dom';

 const SubNavpage = () => {
  return (
   
       
        <nav>
            <ul>
               <Link to="/services/FinancialAccounting">FinancialAccounting</Link>  
                <Link to="/services/StockIntake">Stock Intake</Link>
            </ul>
            </nav>

 
  )
}


export default SubNavpage;