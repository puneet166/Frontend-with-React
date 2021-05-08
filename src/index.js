import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CookiesProvider} from 'react-cookie';// import cookies for save user token in cokkie. jissai user ko baar baar login na krna pdai
//make sure install cokkie package. for this check you package json dependency.

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; //import bootstrap // make sure install in your system. for see check ur package.json's dependencies.
import {Route , BrowserRouter} from 'react-router-dom';// import react router // make sure these install in your computer
import Login from './components/Login';
function Router(){
  return (
    <CookiesProvider>
    <BrowserRouter>
    <Route exact path = "/" component = {Login}/>
    <Route exact path = "/user_data" component = {App}/>

    </BrowserRouter>
    </CookiesProvider>
  )
}
// its main js file 
ReactDOM.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
