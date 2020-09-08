import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "./companies.css"
import InputLabel from '@material-ui/core/InputLabel';
import Company from "./company"
function companies() {

    
    return (
        <div className="companies">
            
                <h1>Compaines</h1>
            
            <div className="companies_search_bar">
                <input type="text" placeholder="What are you looking for?"></input>
                <input type="address" placeholder="Location"></input>
                <FormControl >
                  <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    
                   
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Textile">Textile</MenuItem>
                    <MenuItem value="Foods">Foods</MenuItem>
                    <MenuItem value="Tech">Tech</MenuItem>
                  </Select>
                  <FormHelperText>You can choice best Category</FormHelperText>
                </FormControl>
                <button className="companies__button">Get Started</button>                   
            </div>
            <Company/>
            <Company/>
            <Company/>
            <Company/>
            <Company/>
        </div>
    )
}

export default companies
