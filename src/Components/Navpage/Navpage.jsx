
import React from 'react'
import './Navpage.css';
import { Link } from 'react-router-dom';

 const Navpage = () => {
  return (
    <div>
        <nav className="nav">
           
            <ul>
                <Link to="/HomePage">Home</Link>
                <Link to="/AboutUs">About Us</Link>
                <Link to="/Services">Services</Link>
              
            </ul>
        </nav>
    </div>
  )
}

export default Navpage;