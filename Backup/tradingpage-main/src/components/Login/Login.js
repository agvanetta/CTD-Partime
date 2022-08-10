import React, { useState } from "react";
import axios from "axios";
import "./Login.css"
import LoginImg from './login_img.jpg'
import LogoRight from '../robinlogo.svg'
import { Link } from "react-router-dom";


function Login() {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

function handleSubmit(e) {
  e.preventDefault();
  let url = "http://localhost:8080/api/authenticate";
  let payload = { username: username, password: password };
  axios
    .post(url, payload)
    .then((data) => {
      if (data.data.jwt) {
        localStorage.setItem("jwt", data.data.jwt);
        window.location.reload();
      }
    })
    .catch((e) => console.log(e));
  }

  return (
    <div className='login'>
      <div className='login__left'>
      <img className='login__img' src={LoginImg}  alt="logo" />
        <div className='login__title'>
           <img className='login__title__logo' src={LogoRight} width={15} alt="logo" />
           <div className='login__title__text'>Robinhood</div>
        </div>
      </div>      
      <div className='login__right'>
        <div><img className='login__right__img' src={LogoRight} width={25} alt="logo"/></div>
        <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {setUsername(e.target.value)}} 
              className='login__input'/>
              </div>
        <div>
          <input type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {setPassword(e.target.value)}} 
              autoComplete="on"
              className='login__input'/>
              </div>
        {/* <div>Olvidaste tu contraseña?</div> */}
        <div>
           {/* <Link to="/" type="submit" > */}
             <button to="/" type="submit" className="login__singInButton">
                Sing In
            </button>
          {/* </Link> */}
        </div>
        </form>
        <div className='login__footer'>Desing Agustin Vanetta</div>
      </div>
      
    </div>

    
  )
}
export default Login;