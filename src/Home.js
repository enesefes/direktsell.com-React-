import React, { useEffect, useState } from 'react'
import "./Home.css"
import germanFlag from './images/germanFlag.png';
import usaFlag from './images/usaFlag.png';
import engFlag from './images/englandFlag.png';
import arabiaFlag from './images/arabiaFlag.png';
import turkMiniFlag from "./images/asset7.png"
import gerMiniFlag from "./images/asset8.png"
import codeFlag from "./images/asset9.png"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import PostAddIcon from '@material-ui/icons/PostAdd';
import BusinessIcon from '@material-ui/icons/Business';
import TranslateIcon from '@material-ui/icons/Translate';
import Ads from "./ads";

import {Link } from 'react-router-dom';



function Home() {

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
        <div className="home">
            {width < 768 && (
            <AppBar position="static">
              <Toolbar variant="dense">
                <IconButton edge="start" color="inherit">
                  <MenuIcon />
                </IconButton>
                
                <Typography variant="h6" color="inherit">
                  Direktsell
                </Typography>
              </Toolbar>
            </AppBar>
            )}
            <h1>En güzel firmaları bulacağın adres</h1>
            <h3>
                Direktsell.com ile yapabileceğin her şeyi yap ve en güzel ortaklarıkları kurmaya şimdi başla.
                
            </h3>
            <Link to="/home">
              <button type="button" className="home__button">Yeni Ortaklar Bul</button>              
            </Link>

            
            <div className="flags">
                 <img className="flag" alt="germanFlag" src={germanFlag}></img>
                 <img className="flag" alt="germanFlag" src={usaFlag}></img>
                 <img className="flag" alt="germanFlag" src={arabiaFlag}></img>
                 <img className="flag" alt="germanFlag" src={engFlag}></img>
            </div>
            <div className="content1">
              <h2>Find new parter from everywhere in the World.</h2>
              <div className="contentInside">
              <div className="contents">
                <div className="contentsHeader">
                  <PostAddIcon  style={{ fontSize: 40}}/>
                  <h3 className="contentHeader__h3">Free Buying / Selling Request</h3>
                </div>                
                <p>
                  You just add new request and don't forget check your inbox
                </p>
                </div>
                <div className="contents">
                <div className="contentsHeader">
                  <BusinessIcon  style={{ fontSize: 40}}/>
                  <h3 className="contentHeader__h3">
                    Free Company Add
                  </h3>
                </div>                
                <p>
                  Just go to Company Settings and add your company details, your partner will know you faster than now
                </p>
                </div>
                <div className="contents">
                <div className="contentsHeader">
                  <TranslateIcon  style={{ fontSize: 40}}/>
                  <h3 className="contentHeader__h3">Language Support</h3>
                </div>                
                <p>
                    Do you want to introduce German Turkish and English or Do you have problem in communication with your partner.
                    Don't worry we can help you to communication with your partner
                </p>
                </div>
             
              </div>
              <button className="home__button">Get Started</button>
            </div>
            <div className="content1">
              <h2>Who Are We?</h2>
              <div className="contentInside">
              <div className="contents">
                <div className="contentsHeader">
                  <img src={turkMiniFlag} alt="turkishflag"/>
                  
                  <h3 className="contentHeader__h3">We are in Turkey</h3>
                </div>                
                <p>
                  We can help you if you want to do business in Turkey. Just send us a message
                </p>
                </div>
                <div className="contents">
                <div className="contentsHeader">
                  <img src={gerMiniFlag} alt="germanyflag"/>
                  <h3 className="contentHeader__h3">
                    We are in Germany
                  </h3>
                </div>                
                <p>
                  We can help you if you want to do business in Germany. Just send us a message
                </p>
                </div>
                <div className="contents">
                <div className="contentsHeader">
                  <img src={codeFlag} alt="codeflag"/>
                  <h3 className="contentHeader__h3">We are Using Technology</h3>
                </div>                
                <p>
                  We don't just focus trade and Business. At same time We develop technology. You should not forget that Direktsell.com will be beside in your every steps.
                </p>
                </div>
             
              </div>
              <button className="home__button">Get Started</button>
            </div>
            <Ads/>
        </div>
    )
}

export default Home
