import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./login-page";
import Home from "./home";
import { ThemeProvider } from "../context/ThemeContext";
import { LoginContext } from "../context/LoginContext";
import React, { useState } from 'react'


function AppRoutes() {

  const [email, setEmail] = useState("");
  const [showProfile, setShowProfile] = useState(false)

  return (
    <ThemeProvider>    
      <LoginContext.Provider value={ {setEmail, setShowProfile, email} }>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter> 
       </LoginContext.Provider>       
  / </ThemeProvider>
  );
}

export default AppRoutes;
