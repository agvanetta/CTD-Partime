import React from 'react';
//x||import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./components/Login/Login";
import {BrowserRouter as Router} from 'react-router-dom';

// let componente;
// localStorage.getItem("jwt") ? componente = <App/> : componente = <Login/>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );

// reportWebVitals();

let componente;
localStorage.getItem("jwt") ? componente = <App/> : componente =  <Router><Login/></Router>
ReactDOM.render(
  <React.StrictMode>
   {componente}
  </React.StrictMode>,
  document.getElementById('root')
);

