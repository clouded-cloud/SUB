
import React from 'react'
import './Navpage.css';
import { Link } from 'react-router-dom';

export const Navpage = () => {
  return (
    <div>
        <nav className="nav">
           
            <ul>
                <Link to="/HomePage">Home</Link>
                <Link to="/AboutUs">About Us</Link>
                <Link to="/Services">Services</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Login">Login</Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navpage;