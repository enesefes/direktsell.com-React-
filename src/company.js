import React from 'react'
import "./company.css"
import Logo from "./images/logo.png"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';





function company() {

    
      
    return (
        <div className="company">
            <div className="company__img">
            <FormControlLabel
              control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
              
            />
           
                <img src={Logo} alt="company_logo"></img>
           </div>
           <div className="compnay__information">
                <h3>Company Name</h3>
                <p>Company descirtopn and about us</p>
                <span>#hasdac #sell #buy #falan #filan</span>
           </div>
           <div className="company__product">
           <h1>Product</h1>
           </div>
        </div>
    )
}

export default company
