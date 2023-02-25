import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";

const LoginForm = () => {
  return <div>
    <form>
    <Box display="flex" 
         flexDirection={"column"} 
         maxWidth={800}
         alignItems="center" 
         justifyContent={"center"} 
         margin="auto"
         marginTop={5} 
         padding= {3} 
         borderRadius={5} 
      boxShadow={"5px 5px 10px #ccc"}
      sx= {{":hover": {
        boxShadow :"10px 10px 20px #ccc",
      }}}
     >
      <Typography variant="h4" padding={1} textAlign="center" color={'secondary'}>Welcome to Studlife !</Typography>
      <TextField margin= "normal" type={"email"} variant={"outlined"} placeholder={"Email"} style={{ width: '700px', height: '50px' }}/>
      <TextField margin= "normal" type={"password"} variant={"outlined"} placeholder={"Password"} style={{ width: '700px', height: '50px' }} />
       <Button  sx= {{marginTop: 3, borderRadius: 2 }} variant="contained" style={{ width: '700px', height: '40px' }}  color="secondary">LOGIN</Button>
       
       <Typography textAlign= "justify" paddingTop={3} >
         Don't have an account?<RouterLink to="/register">Sign up here</RouterLink> 
</Typography>
       </Box>
  </form>

  </div>;
};

export default LoginForm;
