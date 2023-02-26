import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PostCard from './PostCard';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';


/* 
        ha4a structure taa post taa 3 Furniture w Roomate w houses
        Post function ta5ou component ili howa haki prtie ili fiha Details ili lfou9 ya ima DetailsHome ya ima 
        DetailsRoomate ya ima DetailsFurniture
        Condition true t7ot location (fi page taa post House w Roomate) w false (t7otich location fi post taa Furniture)
        postimage = image ili f post
        avatar image = image taa avatar
*/

export default function Post(props) {
    const Details = props.Details;
    const condition = props.condition;
    const postimage = props.postimage;
    const avatarimage =props.avatarimage;
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{mt:'2%',mr:'2%',mb:'2%',ml:'2%'}}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar align='middle' alt="Remy Sharp" src={avatarimage}   sx={{ width: '5%', height: '5%' }}/>
            <Typography variant="h6" color="#6D28D9"  fontSize='90%' sx={{mt:'2%'}}>Hamdi Messoud</Typography>
        </Box>
        </Grid>
        <Grid container item xs={12} sx={{mt:'2%',mr:'2%',mb:'2%',ml:'2%'}}>
          <Details />
        </Grid>
        <Grid container sx={{mt:'2%',mr:'2%',mb:'2%',ml:'2%'}}>
            <Grid item xs={12} md={8} sx={{ border: 1 ,  borderColor:"#6D28D9", borderRadius: '2%', mb:'5%',ml:'2%'}}>
                <PostCard image={postimage}/>
            </Grid>
            <Grid item xs={12} md={3} sx={{ml:'4%'}}  >
                <Box sx={{ border: 1 , mb:'10%' ,  borderColor:"#6D28D9", borderRadius: '2%', height: '50%'}}>
                <Typography variant="h6" color="#6D28D9" align='center'>Description</Typography>
                <Typography variant="subtitle1" color="black" align='center'>
                <p> Description Description Description Description </p>
                </Typography>                   
                </Box>
                {condition && <Box sx={{ border: 1 ,  borderColor:"#6D28D9", borderRadius: '2%', height: '50%'}}>
                <Typography variant="h6" color="#6D28D9" align='center'>Location</Typography>
                <Typography variant="subtitle1" color="black" align='center'>
                <p> Description Description Description Description </p>
                </Typography>  
                </Box>}
            </Grid>
        </Grid>
      </Grid>
  );
}