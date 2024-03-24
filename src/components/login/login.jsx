import React from "react";
import "./login.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "./img/img.gif";
import car from "./img/car.gif";
import {LoginContext} from '../../context/LoginContext'


export default function Login() {

  const [password, setPassword] = useState("");
  const { email, setEmail } = useContext(LoginContext)
  const navigate = useNavigate();


  const logar = (e) => {
    if(e.key === 'Enter'){ 
      if(email === "cliente"  && password === "123"){
         navigate('./home')      
      }else if (email === "administrador"  && password === "123"){
        navigate('./dashboard')    
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
          <img src={car} alt="carrinho de compras" />
          <div className="wrap-login">
            <form className="login-form">
              <span className="login-form-title">Bem vindo!!</span>
              <span className="login-form-title">
                <img className="imgLogin" src={img} alt="" />
              </span>

              <div className="wrap-input">
                <input
                  className= {email !== "" ? "has-val input" : "input"}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                  onKeyPress={logar} 
                />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={password !== "" ? "has-val input" : "input"}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}   
                  onKeyPress={logar}               
                />
                <span className="focus-input" data-placeholder="Password"></span>
              </div>

              <div className="container-login-form-btn">
                <Link to={email === 'administrador' && password === '123'? '/dashboard': '' ||
                          email === 'cliente'       && password === '123'? '/home'     : '' } className="login-form-btn">
                  Login
                </Link>              
              </div>
              <div className="text-center">
                <span className="txt1">Não possui conta?</span>

                <a className="txt2">Criar conta.</a>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

