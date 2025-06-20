// src/App.js
import React, { useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Navbar from './Components/Navpage/Navpage';
import HomePage from './Components/Homepage/Homepage';
import About from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import FinancialAccounting from './Components/FinancialAccounting/FinancialAccounting';
import StockIntake from './Components/StockIntake/StockIntake';



const App = () => {
  const [auth, setAuth] = useState(false);

  return (

    <BrowserRouter>
    <Navbar/>
  
  
      <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Login" element={<Login setAuth={setAuth} />} />
        </Routes>

      
      <Routes>
          <Route path="/FinancialAccounting" element={<FinancialAccounting />} />
          <Route path="/StockIntake" element={<StockIntake />} />
        </Routes>

      <Routes>
        <Route path="/Services" element={auth ? <Services setAuth={setAuth} /> : <Login setAuth={setAuth} />} />
        <Route path="/" element={auth ? <login setAuth={setAuth} /> : <Login setAuth={setAuth} />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;