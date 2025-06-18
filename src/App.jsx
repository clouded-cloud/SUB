// src/App.js
import React, { useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navpage/Navpage';

import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';

const App = () => {
  const [auth, setAuth] = useState(false);

  return (

    <BrowserRouter>
    <Navbar/>
     <Routes>
        <Route path="/" element={<Dashboard setAuth={setAuth} />} />
        <Route path="/Homepage" element={<Dashboard setAuth={setAuth} />} />
        <Route path="/home" element={<Dashboard setAuth={setAuth} />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
      </Routes>
   
      <Routes>
        <Route path="/dashboard" element={auth ? <Dashboard setAuth={setAuth} /> : <Login setAuth={setAuth} />} />
        <Route path="/" element={auth ? <Dashboard setAuth={setAuth} /> : <Login setAuth={setAuth} />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;