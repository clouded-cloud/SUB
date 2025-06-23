// src/App.js
import React, { useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Navbar from './Components/Navpage/Navpage';
import HomePage from './Components/Homepage/Homepage';
import About from './Components/AboutUs/AboutUs';
import Services from './Components/Services/Services';
import Dashboard from './Components/Dashboard/Dashboard';
import ServicesPage from './Components/ServicesPage/ServicesPage';
import FinancialAccounting from './Components/FinancialAccounting/FinancialAccounting';
import StockIntake from './Components/StockIntake/StockIntake';
import Footer from './Components/Footer/Footer';
import SubNavpage from './Components/SubNavpage/SubNavpage';



const App = () => {
  const [auth, setAuth] = useState(false);

  return (

    <BrowserRouter>
    <Navbar/>
    
   
      <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/AboutUs" element={<About/>} />
          <Route path="/services/*" element={<Services setAuth={setAuth}/>} >
          <Route path='FinancialAccounting' element={<FinancialAccounting/>}/>
          <Route path='StockIntake' element={<StockIntake/>}/>
          </Route>
      
          
        </Routes>

     

      <Routes>
        <Route path="/services" element={auth ? <Dashboard setAuth={setAuth} /> : <Login setAuth={setAuth} />} />
        <Route path="/services" element={auth ? <login setAuth={setAuth} /> : <Login setAuth={setAuth} />} />

        
      </Routes>

       <Footer/>
    </BrowserRouter>
  );
};

export default App;