/* RoommateForm.js: This component is used in the StudentRoutes.js file to render a form for 
student users to create a new roommate post.*/

/* FurnitureForm.js: This component is used in the StudentRoutes.js file to render 
a form for student users to create a new furniture post.*/
import React  from "react";
import { Typography, TextField, Box, FormControl } from "@mui/material";
import PhotoUploader from "components/common/PhotoUploader";
import { Select, MenuItem , InputLabel } from '@mui/material';
import { useState } from "react";

  const RoommateForm = () => {
    const [gender, setGender] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { value: 'Option1', label: 'Ariana' },
    { value: 'option2', label: 'Béja' },
    { value: 'option3', label: 'Ben Arous' },
    
    { value: 'option4', label: 'Bizerte' },
    { value: 'option5', label: 'Gabès' },
    { value: 'option6', label: 'Gafsa' },
    { value: 'option7', label: 'Jendouba' },
    { value: 'option8', label: 'Kairouan' },
    { value: 'option9', label: 'Kasserine' },
    { value: 'option10', label: 'Kebili' },
    { value: 'option11', label: 'Kef' },
    { value: 'option12', label: 'Mahdia' },
    { value: 'option13', label: 'Manouba' },
    { value: 'option14', label: 'Medenine' },
    { value: 'option15', label: 'Monastir' },
    { value: 'option16', label: 'Nabeul' },
    { value: 'option17', label: 'Sfax' },
    { value: 'option18', label: 'Sidi Bouzid' },
    { value: 'option19', label: 'Siliana' },
    { value: 'option20', label: 'Sousse' },
    { value: 'option21', label: 'Tataouine' },
    { value: 'option22', label: 'Tozeur' },
    { value: 'option23', label: '	Tunis' },
    { value: 'option24', label: 'Zaghouan'},
    

  ];

  return <div>

<Box sx={{display:"flex", 
         height: "65px",
       width :"700px",
         flexDirection:"row",
         justifyContent:"space-between",
         margin:"auto"}} >
         
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
          <TextField  margin= "normal" type={"text"} variant={"outlined"} placeholder={"Location description"} style={{ width: '340px', height: '35px' }} />
          <FormControl  sx={{ marginTop: 2, minWidth: 340  }} size="medium">
          <InputLabel id="demo-select-small">RoomType</InputLabel>
          <Select
          onChange={handleGenderChange}
    >
           <MenuItem value='OUI'>Individual</MenuItem>
           <MenuItem value='NON'>Twice</MenuItem>
      
          </Select>
           </FormControl>

      </Box>
      <Box sx={{display:"flex",
      height: "65px", 
       width :"700px",
         flexDirection:"row",
         justifyContent:"space-between",
         margin:"auto"}} >
          <TextField  margin= "normal" type={"text"} variant={"outlined"} placeholder={"Part"} style={{ width: '340px', height: '35px' }}/>
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
          onChange={handleGenderChange}
    >
      <MenuItem value='OUI'>Yes</MenuItem>
      <MenuItem value='NON'>No</MenuItem>
      
    </Select>
     </FormControl>
          <TextField margin= "normal" type={"text"} variant={"outlined"} placeholder={"Tel"} style={{ width: '340px', height: '35px' }}/>

      </Box>
      <Box sx={{display:"flex", 
      height: "65px",
       width :"700px",
         flexDirection:"row",
         justifyContent:"space-between",
         margin:"auto"}} >
          <TextField  margin= "normal" type={"text"} variant={"outlined"} placeholder={"Description"} style={{ width: '340px', height: '35px' }}/>
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
      <Box height={"20px"}>

      </Box>
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



export default RoommateForm;
