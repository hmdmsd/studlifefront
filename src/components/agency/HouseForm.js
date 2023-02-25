/* FurniturePost.js: This component is used to display a single furniture post. 
It is used in the StudentHome.js page. */


import React  from "react";
import { Typography, TextField, Box, FormControl } from "@mui/material";
import PhotoUploader from "components/common/PhotoUploader";
import { Select, MenuItem , InputLabel } from '@mui/material';
import { useState } from "react";

  const RentHousesForm = () => {
    const [gender, setGender] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { value: 'OPtion1', label: 'Ariana' },
    { value: 'option2', label: 'Béja' },
    { value: 'option3', label: 'Ben Arous' },
    
    { value: 'option50', label: 'Bizerte' },
    { value: 'option50', label: 'Gabès' },
    { value: 'option50', label: 'Gafsa' },
    { value: 'option50', label: 'Jendouba' },
    { value: 'option50', label: 'Kairouan' },
    { value: 'option50', label: 'Kasserine' },
    { value: 'option50', label: 'Kebili' },
    { value: 'option50', label: 'Kef' },
    { value: 'option50', label: 'Mahdia' },
    { value: 'option50', label: 'Manouba' },
    { value: 'option50', label: 'Medenine' },
    { value: 'option50', label: 'Monastir' },
    { value: 'option50', label: 'Nabeul' },
    { value: 'option50', label: 'Sfax' },
    { value: 'option50', label: 'Sidi Bouzid' },
    { value: 'option50', label: 'Siliana' },
    { value: 'option50', label: 'Sousse' },
    { value: 'option50', label: 'Tataouine' },
    { value: 'option50', label: 'Tozeur' },
    { value: 'option50', label: '	Tunis' },
    { value: 'option50', label: 'Zaghouan'},
    

  ];

  return <div>

<Box sx={{display:"flex", 
         height: "65px",
       width :"700px",
         flexDirection:"row",
         justifyContent:"space-between",
         margin:"auto"}} 
         >
         
               <FormControl  sx={{ marginTop: 2, minWidth: 340  }} size="medium">
          <InputLabel id="demo-select-small">City</InputLabel>
          
            <Select value={selectedOption} onChange={handleOptionChange}>
               {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
               </MenuItem>
            ))}
        
    </Select>
     </FormControl>
     <TextField  margin= "normal" type={"text"} variant={"outlined"} placeholder={"Delegation"} style={{ width: '340px', height: '35px' }} />
      </Box>
      <Box sx={{display:"flex", 
      height: "65px",
       width :"700px",
         flexDirection:"row",
         justifyContent:"space-between",
         margin:"auto"}} >
          <TextField  margin= "normal" type={"text"} variant={"outlined"} placeholder={"Location Description"} style={{ width: '700px', height: '35px' }} />
          

      </Box>
      
      <Box sx={{display:"flex", 
      height: "65px",
       width :"700px",
         flexDirection:"row",
         justifyContent:"space-between",
         margin:"auto"}} >
          <TextField margin= "normal" type={"number"} variant={"outlined"} placeholder={"Price"} style={{ width: '340px', height: '35px' }}/>
          <FormControl  sx={{ marginTop: 2, minWidth: 340  }} size="medium">
          <InputLabel id="demo-select-small">HouseType</InputLabel>
          <Select
           label="Gender"
          value={gender}
          onChange={handleGenderChange}
    >
      <MenuItem value='S0'>S0</MenuItem>
      <MenuItem value='S+1'>S+1</MenuItem>
      <MenuItem value='S+2'>S+2</MenuItem>
      <MenuItem value='S+3'>S+3</MenuItem>
      
    </Select>
     </FormControl>

      </Box>
      <Box sx={{display:"flex", 
      height: "65px",
       width :"700px",
         flexDirection:"row",
         justifyContent:"space-between",
         margin:"auto"}} >
             <FormControl  sx={{ marginTop: 2, minWidth: 340  }} size="medium">
          <InputLabel id="demo-select-small">Furnished</InputLabel>
          <Select
           label="Gender"
          value={gender}
          onChange={handleGenderChange}
    >
      <MenuItem value='Yes'>Yes</MenuItem>
      <MenuItem value='No'>No</MenuItem>
    </Select>
     </FormControl>
          <TextField  margin= "normal" type={"text"} variant={"outlined"} placeholder={"Tel"} style={{ width: '340px', height: '35px' }}/>
         
  
           
      </Box>
      <Box height={"20px"}>

      </Box>
      <Box sx={{display:"flex", 
      height: "65px",
       width :"700px",
         flexDirection:"row",
         justifyContent:"space-between",
         margin:"auto"}}>
      <TextField  margin= "normal" type={"text"} variant={"outlined"} placeholder={"HouseDescription"} style={{ width: '340px', height: '35px' }}/>
      <FormControl  sx={{ marginTop: 2, minWidth: 340  }} size="medium">
          <InputLabel id="demo-select-small">Gender</InputLabel>
          <Select
           label="Gender"
          value={gender}
          onChange={handleGenderChange}
    >
      <MenuItem value='male'>Male</MenuItem>
      <MenuItem value='female'>Female</MenuItem>
    </Select>
     </FormControl>
      </Box>
      <Box height="20px"> </Box>
      <Box sx={{display:"flex", 
      height: "80px",
       width :"700px",
         margin:"auto"}} style={{ width: '700px', height: '80px' ,}} border={1}
         borderRadius={2} 
         borderColor="#C0C0C0."
         p={2}
         >
          <PhotoUploader/>
      </Box>
     
      
  </div>;
};



export default RentHousesForm;
