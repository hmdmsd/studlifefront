import React  from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Box } from "@mui/system";
import { Button, TextField, Typography , FormGroup, FormControlLabel, Checkbox ,RadioGroup, Radio, Input } from "@mui/material";
import PhotoUploader from "components/common/PhotoUploader";



const RegisterForm = () => {
  return <div>
    <form>
    <Box display="flex" 
         flexDirection={"column"} 
         maxWidth={800}
         alignItems="center" 
         justifyContent={"center"} 
         margin="auto"
         marginTop={10} 
         padding= {3} 
         borderRadius={5} 
      boxShadow={"5px 5px 10px #ccc"}
      sx= {{":hover": {
        boxShadow :"10px 10px 20px #ccc",
      }}}
     >
      <Typography variant="h4" padding={1} textAlign="center" color={'secondary'}>Welcome to Studlife !</Typography>
      <Box sx={{display:"flex", 
       width :"700px",
         flexDirection:"row",
         justifyContent:"space-between",
         margin:"auto"}} >
          <TextField  margin= "normal" type={"text"} variant={"outlined"} placeholder={"First name"} style={{ width: '340px', height: '35px' }}/>
          <TextField margin= "normal" type={"text"} variant={"outlined"} placeholder={"Last name"} style={{ width: '340px', height: '35px' }}/>

      </Box>
      <Box sx={{display:"flex", 
       width :"700px",
         flexDirection:"row",
         justifyContent:"space-between",
         margin:"auto"}} >
          <TextField margin= "normal" type={"text"} variant={"outlined"} placeholder={"Age"} style={{ width: '340px', height: '35px' }}/>
          <TextField margin= "normal" type={"text"} variant={"outlined"} placeholder={"Location"} style={{ width: '340px', height: '35px' }}/>


      </Box>
      <Box sx={{display:"flex", 
       width :"800px",
         paddingTop : "20px",
         justifyContent:"center",
         margin:"auto"}}>
         <RadioGroup row aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    >
      <FormControlLabel
        value="Student"
        control={<Radio color="secondary" />}
        label="Student"
        style={{ marginRight: 40 }}
      />
      <FormControlLabel
        value="Agency"
        control={<Radio color="secondary" />}
        label="Agency"
        style={{ marginLeft: 40 }}
      />
    </RadioGroup>

          
      </Box>
      <Box style={{ width: '700px', height: '60px' ,}} border={1}
      borderRadius={2} 
      
      borderColor="#C0C0C0."
      p={2}
      textAlign="center">
        <PhotoUploader/>
      </Box>
      
     
      <TextField margin= "normal" type={"email"} variant={"outlined"} placeholder={"Email"} style={{ width: '700px', height: '35px' }}/>
      <TextField margin= "normal" type={"password"} variant={"outlined"} placeholder={"Password"} style={{ width: '700px', height: '35px' }} />
       <Button  sx= {{marginTop: 3, borderRadius: 2  }} variant="contained" style={{ width: '700px', height: '35px' }} color="secondary">Sign up</Button>
       
       <Typography textAlign= "justify" paddingTop={3} >
         Don't have an account?<RouterLink to="/register">Sign up here</RouterLink> 
         </Typography>
       </Box>
  </form>
  </div>;
};


export default RegisterForm;
