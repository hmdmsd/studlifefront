import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HousePostCard from "./HousePostCard";
import FilterPanel from '../common/filterpanel';
import myImage from '../../assets/images/houses/house3lg.png';
import AppBar from '@mui/material/AppBar';
import Footer  from "components/common/footer";
import banner from '../../assets/images/banner.svg';
import Typography from '@mui/material/Typography';
import Studlife from '../../assets/images/icons/Studlife.png';
import Toolbar from '@mui/material/Toolbar';



const AgencyHousePosts = () => {
  return (
      
  

    <div>
   
    
      <FilterPanel />
      {/* rest of the page content */
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
     
        <Box
          sx={{     
                
            alignItems: "center",
          justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            maxWidth: "100%",
            padding: "0.5rem",
            boxSizing: "border-box",
          
          
       
          }}
        >  
         <Box
          sx={{
            paddingTop:'40px',
            flex: "1 1 auto",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
              
              
        
          
        }}
      >
          <HousePostCard title="My Title" imageSrc={ myImage} />
          <HousePostCard title="My Title"imageSrc={ myImage} />
          <HousePostCard title="My Title" imageSrc={ myImage}/>
       
       </Box>
       <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "100%",
            padding: "0.5rem",
            boxSizing: "border-box",
          }}
        > 
          <HousePostCard title="My Title" imageSrc={ myImage} />
          <HousePostCard title="My Title"imageSrc={ myImage} />
          <HousePostCard title="My Title" imageSrc={ myImage}/>
       
       </Box>
      </Box>
      <Box sx={{ flex: "0 0 auto", padding: "0.5rem" }}>
   <div> Welcome to Agency House Posts</div>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
          <Link to="/agencyprofile/:userId/agencyhouseposts/1"> House 1</Link>
          <Link to="/agencyprofile/:userId/agencyhouseposts/2"> House 2</Link>
          <Link to="/agencyprofile/:userId/agencyhouseposts/3"> House 3</Link>
          <Link to="/agencyprofile/:userId/agencyhouseposts/4"> House 4</Link>
        </Box>
      </Box>
      <Footer/>
    </Box>
  
    }
     </div>
  );
};

export default AgencyHousePosts;
