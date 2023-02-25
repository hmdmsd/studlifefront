import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  

  return (
    <Box>
    <Box sx={{ bgcolor: 'secondary.main', color: 'white'}}>
      <Box sx={{ py: 3, px: 2 ,marginLeft: '15%' }}>
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ maxWidth: '90%', margin: '0 auto' }}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: 'black',fontWeight: 'bold'  }}>
              Company
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Privacy
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Terms
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Status
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: 'black',fontWeight: 'bold'  }}>
              Services
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Apartments Rental
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Used Furnitures Sale
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Roo-mate Finder
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: 'black',fontWeight: 'bold'  }}>
              Support
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              FAO
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Help Center
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Contact
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <IconButton sx={{ color: 'white' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: 'white' }}>
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: 'white' }}>
              <YouTubeIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Box>

    </Box>
  );
};

export default Footer;