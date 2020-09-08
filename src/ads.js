import React from 'react';
import "./ads.css";
import { Radio } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SearchIcon from '@material-ui/icons/Search';
import Ad from "./Ad"
import Grid from '@material-ui/core/Grid';








function ads() {
   
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <div className="first__ads">
            <div className="ads">

                <h2 className="ads__h2">Advertise immediatly and find customer</h2>
                <div className="adsContent">
                    <div>
                        <form className="ads__form">
                        <input type="text" placeholder="What do want to buy or sell"></input>
                        <div className="ads__form__button">
                        <RadioGroup row aria-label="seller" name="seller1">
                            <FormControlLabel value="Demand to buy" control={<Radio />} label="Demand to buy" />
                            <FormControlLabel value="Sales request" control={<Radio />} label="Sales request" />
                        </RadioGroup>
                        <button>Share It </button>
                        </div>                        
                        </form>
                    </div>
                    <div className="filterTop">
                    <div className="ads__Header">
                        <h2>Last Request</h2>
                        <div className="ads__Header__filters">
                            <button className="ads__button">All Request</button>
                            <button className="ads__button">Buying</button>
                            <button className="ads__button">Selling</button>                             
                        </div>
                        
                    </div>
                    <div className="ads_search">
                            <SearchIcon/>
                            <input placeholder="Search ads"></input>
                    </div>
                    </div>
                        <Ad/>
                        <Ad/>
                        <Ad/>
                        <Ad/>
                        <Ad/>
                        
                    
                    </div>
                </div>

            </div>
            </Grid>
        </Grid>
       
    )
}

export default ads
