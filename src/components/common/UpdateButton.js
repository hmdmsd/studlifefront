import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { purple } from '@mui/material/colors';



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[700],
  '&:hover': {
    backgroundColor: purple[500],
    
  } , width: '340px', height: '40px',marginTop: 30, borderRadius: 7
}));

 function UpdateNow() {
  return (
   
      <ColorButton  variant="contained">Update Now</ColorButton>
      
    
  );
}



export default UpdateNow;
