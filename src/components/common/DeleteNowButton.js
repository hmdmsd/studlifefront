import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[700],
  '&:hover': {
    backgroundColor: red[500],
    
  } , width: '340px', height: '40px',marginTop: 30, borderRadius: 7
}));

 function DeleteNowButton() {
  return (
   
      <ColorButton  variant="contained">Delete Now</ColorButton>
      
    
  );
}



export default DeleteNowButton;