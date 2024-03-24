import React from "react";
import './components/App.css'
import { createGlobalStyle } from 'styled-components'
import AppRoutes from "./pages/routes";


function App() {
  return (
    <div >     
     <GlobalStyle/>
      <AppRoutes/> 
    </div>          
  );
}


const GlobalStyle = createGlobalStyle`

* {
  margin:0;
  padding: 0
}

html {
  scroll-behavior: smooth;
}

`

export default App;