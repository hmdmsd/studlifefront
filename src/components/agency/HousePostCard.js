import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    borderRadius: '3px',
    maxWidth: '330px',
    margin:'10px',
  
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
    },
  },
 
  image: {
    width: '100%',
    height: '100%',
    borderRadius: '2px',
  },
});

function HousePostCard({ title, imageSrc }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={imageSrc} alt={title} className={classes.image} />
      <Typography variant="h6">{title}</Typography>
    </Box>
  );
}

export default HousePostCard;
