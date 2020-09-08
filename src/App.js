import React, { useEffect, useState } from 'react';
import logo from './images/logo.png';
import lang from "./images/englandFlag.png"
import './App.css';
import Index from "./Home.js";
import Dashbord from "./Dashbord.js";
import Footer from "./footer"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
      function handleResize() {
      setWidth(window.innerWidth);
    }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
      }, [width]);
      useEffect(() => {
      width < 600 && handleSideNavToggle();
      });
      function handleSideNavToggle() {
      
      }
  return (
    
    <div>
   
     
        <Router>
           
           <Switch>              
             <Route path="/home/">
                {width > 768 && (
                  <header className="header">
                    <div>
                      <img className="logo" alt="direktsell.com Logo" src={logo}/>
                    </div>
                    <div className="header__menu">
                      <ul>
                        <li><img  className="langLogo" alt="englishLanguage" src={lang}/><button className="header__button">English</button></li>
                        <li><button className="header__buttonSignUp">Çıkış Yap</button></li>
                      </ul>
                    </div>
                  </header>
                )}
                <Dashbord/>
             </Route>
             <Route path="/">
             {width > 768 && (
                <header className="header">
                  <div>
                    <img className="logo" alt="direktsell.com Logo" src={logo}/>
                  </div>
                  <div className="header__menu">
                    <ul>
                      <li><img  className="langLogo" alt="englishLanguage" src={lang}/><button className="header__button">English</button></li>
                      <li><button className="header__button">Giriş Yap</button></li>
                      <li><button className="header__buttonSignUp">Kayıt Ol</button></li>
                    </ul>
                  </div>
                </header>
               )}
               <Index/>
               
             </Route>
             
           </Switch>
           
        
        </Router> 
    
    
    </div>
    
    
    
     
    
   
  );
}

export default App;
