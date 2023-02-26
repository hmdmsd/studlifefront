import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Select, MenuItem, Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import InputLabel from '@material-ui/core/InputLabel';
import { FormControl } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
  color:"purple",
    display: "flex",
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    minWidth: "200",
  
  },
  TextField:{
    color:"purple",
  },

 
}));

const FilterPanel = () => {
  const classes = useStyles();

  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [furniture, setFurniture] = useState("");



  const handleRefresh = () => {
    setLocation("");
    setType("");
    setPrice("");
    setFurniture("");
  };

  return (
    <div className={classes.root} >
      <TextField  
        label="Location"
        variant="outlined"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
       
      />
       
      <FormControl  className={classes.formControl} style={{ maxwidth: 300, minWidth: 200 }} >
          <InputLabel id="status-label" >  Status</InputLabel>
      <Select
        label="Type"
        variant="outlined"
        
        value={type}
        onChange={(e) => setType(e.target.value)}
        display="column"

       
      >  
        <MenuItem value="S+0">S+0</MenuItem>
        <MenuItem value="S+1">S+1</MenuItem>
        <MenuItem value="S+2">S+2</MenuItem>
        <MenuItem value="S+3">S+3</MenuItem>
      </Select>
      </FormControl>

      <TextField 
        label=" Price"
        variant="outlined"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        
     
      />  

<FormControl  className={classes.formControl} style={{ maxwidth: 300, minWidth: 200 ,}} >
          <InputLabel id="status-label" >  Fourniture</InputLabel>
      
      <Select 
        label="Furniture"
        variant="outlined"
        value={furniture}
      
        onChange={(e) => setFurniture(e.target.value)}>
       
        <MenuItem value="furnished">Furnished</MenuItem>
        <MenuItem value="semi-furnished">Semi Furnished</MenuItem>
        <MenuItem value="unfurnished">Unfurnished</MenuItem>
      </Select>
      </FormControl>
      <Button style={{heigh:"100",backgroundColor: 'purple'  }}
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<Search />}
        onClick={handleRefresh}
       
      >
        Search
      </Button>
    </div>
  );
};

export default FilterPanel;