import React from "react";
import Navbar from "components/common/Navbar";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/styled-engine';


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Title = styled('h1')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: '4rem',
  fontWeight: 700,
  textAlign: 'center',
  color: theme.palette.secondary.main,
  animation: `${fadeIn} 2s ease-in-out forwards`,
}));

const AgencyHome = () => {
  return (
    <Box sx={{ py: 10 ,marginRight: '3rem' ,marginleft: '3rem' }}>
      <Title>Welcome AGENCY <br/>WE ARE GONING <br/>TO FUCK U...</Title>
    </Box>
   
  );
};

export default AgencyHome;
