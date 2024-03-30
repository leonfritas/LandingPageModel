import React from "react";
import "./login.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from '../../context/LoginContext'
import { LockClosedIcon,EnvelopeIcon  } from "@heroicons/react/24/outline";
import imgUserLogin from './img/userLogin.png'

export default function Login() {

  const [password, setPassword] = useState("");
  const { email, setEmail } = useContext(LoginContext)
  const navigate = useNavigate();

  const logar = (e) => {
    if(e.key === 'Enter'){ 
      if(email === "cliente"  && password === "123"){
         navigate('../')      
      }else{ 
        setPassword('')
        alert('Usuário ou senha não encontrados.')
      }
    }        
  }

  /* INCIO DO CONTAINER DE LOGIN */
  return (
    
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">            
            <form className="login-form">    
              <img className='imgUserLogin' src={imgUserLogin} alt="" />          
              <span className="login-form-title">              
              </span>              
              <div className="wrap-input">   
                <EnvelopeIcon className="iconEmail h-6 w-6 text-gray-500" />             
                <input
                  className= {email !== "" ? "has-val input" : "input"}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                  onKeyPress={logar} 
                  placeholder="Email ID" 
                />                
              </div>
              <div className="wrap-input">
                <LockClosedIcon className="iconPassword h-6 w-6 text-hw-500" />
                <input
                  className={password !== "" ? "has-val input" : "input"}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}   
                  onKeyPress={logar}    
                  placeholder="Password"           
                />                          
              </div>
              <div className="text-center">
                <div className="divChk">
                  <input className="chkRemember" type="checkbox" />
                  <span className="txt1">Remember me</span>
                </div>                
                <a className="txt2">Forgot Password?</a>
              </div>
              <div className="container-login-form-btn">
                <Link to={email === 'cliente' && password === '123'? '/' : '' } className="login-form-btn">
                  Login
                </Link>              
              </div>              
            </form>
          </div>
        </div>
      </div>
  );
}

