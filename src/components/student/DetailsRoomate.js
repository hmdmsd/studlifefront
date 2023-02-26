import * as React from 'react';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import "./Details.css";
export default function DetailsRoomate(){
    return(
        <Grid container item spacing={1} className="GridContainer">
            <Grid item xs={12} sm={6}>
                <ul>
                    <li className='ListItem'><b>Governate:</b></li>
                    <li className='ListItem'><b>Delegation:</b></li>
                    <li className='ListItem'><b>Type:</b></li>
                    <li className='ListItem'><b>Gender:</b></li>
                </ul>
            </Grid>
            <Divider orientation="horizontal" flexItem sx={{ color: "#6D28D9" }}/>
            <Grid item xs={12} md={6}>
                <ul>
                    <li className='ListItem'><b>Furnished:</b></li>
                    <li className='ListItem'><b>Tel:</b></li>
                    <li className='ListItem'><b>Part:</b></li>
                    <li className='ListItem'><b>Room-type:</b></li>  
                </ul>               
            </Grid>
        </Grid>
    )
}