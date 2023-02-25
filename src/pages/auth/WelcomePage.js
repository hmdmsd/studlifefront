import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Studlife from '../../assets/images/icons/Studlife.png';
import banner from '../../assets/images/banner.svg';
import '../../../src/index.css';
import { useTheme } from '@mui/material/styles';
import Footer from '../../components/common/footer';

const WelcomePage = () => {
  const theme = useTheme();
  return (
    
    <Box sx={{ backgroundColor: 'white' }}>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ backgroundColor: 'white' }} >
      <Toolbar  >
        
        <img src={Studlife} alt="Logo" className="logo" />
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
        </Typography>
        <Button color="secondary" sx={{ textTransform: 'none' ,fontWeight: 'bold' }}>Login</Button>
        <Box sx={{ p: 2 }}>
        <Button variant="contained" color="secondary" sx={{ textTransform: 'none',fontWeight: 'bold' }}>
          Sign Up
        </Button>
      </Box>
      </Toolbar>
    </AppBar>
    
  </Box>
  <Box sx={{ backgroundColor: 'white' }}>
  <Box sx={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2rem',
        [theme.breakpoints.up('sm')]: {
          margin: '3rem',
        },
        [theme.breakpoints.up('md')]: {
          margin: '4rem',
        },
        [theme.breakpoints.up('lg')]: {
          margin: '5rem',
        },
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'justify', marginRight: '2rem' }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: '1rem' }}>
          <span style={{ color: theme.palette.secondary.main }}>Rent</span>  Your Dream <br />House With US
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'justify' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
            lorem
            egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
            auctor
            vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu,
            lobortis in
            odio.*vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu,
            lobortis in
            odio.
          </Typography>
          <Box sx={{  width: '100%', marginTop: '1rem' }}>
          <Button variant="contained" color="secondary" sx={{ borderRadius: '16px', textTransform: 'none', fontWeight: 'bold', width: '100%' }}>
            Get Started
          </Button>
        </Box>
        </Box>
        
        <Box sx={ { width: '100%', maxWidth: 400, textAlign: 'center' }}>
          <img src={banner} alt="img" />
        </Box>
      </Box>

  </Box>
  <Footer></Footer>
  </Box>
  


  );
};

export default WelcomePage;
