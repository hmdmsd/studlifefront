import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HousePostCard from "./HousePostCard";

const AgencyHousePosts = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box
        sx={{
          flex: "1 1 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
          <HousePostCard />
          <HousePostCard />
          <HousePostCard />
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
          <HousePostCard />
          <HousePostCard />
          <HousePostCard />
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
    </Box>
  );
};

export default AgencyHousePosts;
