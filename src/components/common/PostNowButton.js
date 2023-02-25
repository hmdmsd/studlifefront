import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[700],
  '&:hover': {
    backgroundColor: purple[500],
    
  } , width: '700px', height: '40px',marginTop: 30, borderRadius: 7
}));

 function PostNowButton() {
  return (
   
      <ColorButton  variant="contained">Post Now</ColorButton>
      
    
  );
}



export default PostNowButton;
