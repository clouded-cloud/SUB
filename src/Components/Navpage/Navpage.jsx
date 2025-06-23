
import React from 'react'
import './Navpage.css';
import { Link, Outlet } from 'react-router-dom';

 const Navpage = () => {
  return (
    <div>
        <nav className="nav">
           
            <ul>
                <Link to="/HomePage">Home</Link>
                <Link to="/AboutUs">About Us</Link>
                <Link to="/Services">Services</Link>
                <Link to="FinancialAccounting"></Link>
                <Link to="StockIntake"></Link>
      
              
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Navpage;