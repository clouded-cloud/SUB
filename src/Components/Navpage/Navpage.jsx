
import React from 'react'
import './Navpage.css';

export const Navpage = () => {
  return (
    <div>
        <nav className="nav">
           
            <ul>
                <link to="/">Homepage</link>
                <link to="/AboutUs">About Us</link>
                <link to="/Services">Services</link>
                <link to="/Contact">Contact</link>
                <link to="/Login">Login</link>
            </ul>
        </nav>
    </div>
  )
}

export default Navpage;