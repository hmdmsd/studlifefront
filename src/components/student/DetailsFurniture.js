import * as React from 'react';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import "./Details.css";

export default function DetailsFurniture(){
    return(
        <Grid container item spacing={1} className="GridContainer">
            <Grid item xs={12} sm={6}>
                <ul>
                    <li className='ListItem'><b>Governate:</b></li>
                    <li className='ListItem'><b>Delegation:</b></li>
                    <li className='ListItem'><b>Type:</b></li>
                </ul>
            </Grid>
            <Divider orientation="horizontal" flexItem sx={{ color: "#6D28D9" }}/>
            <Grid item xs={12} md={6}>
                <ul>
                    <li className='ListItem'><b>State:</b></li>
                    <li className='ListItem'><b>Tel:</b></li>
                    <li className='ListItem'><b>Price</b></li>  
                </ul>               
            </Grid>
        </Grid>
    )
}