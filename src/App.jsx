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
import Footer from './Components/Footer/Footer';



const App = () => {
  const [auth, setAuth] = useState(false);

  return (

    <BrowserRouter>
    <Navbar/>
   

   
  
  
      <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/AboutUs" element={<About />} />
         
          <Route path="/services/*" element={<Services setAuth={setAuth}/>} />
        
 
        </Routes>

     

      <Routes>
        <Route path="/services" element={auth ? <Dashboard setAuth={setAuth} /> : <Login setAuth={setAuth} />} />
        <Route path="/" element={auth ? <login setAuth={setAuth} /> : <Login setAuth={setAuth} />} />

      </Routes>

       <Footer/>
    </BrowserRouter>
  );
};

export default App;