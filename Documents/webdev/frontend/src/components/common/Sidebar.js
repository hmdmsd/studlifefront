import React from "react";
import Box from "@mui/material/Box";

const styles = {
  box: {
    display: "flex",
    justifyContent: "space-evenly",
    p: 1,
    m: 5,
    "& > *": {
      py: 1,
      px: 4,
      border: "2px solid transparent",
      borderRadius: 1,
      transition: "all 0.3s ease",
    },
    "& > *:hover": {
      borderColor: "rgb(111, 35, 155)",
      color: "rgb(111, 35, 155)",
    },
  },
};

function SideBar(props) {
  return <Box sx={styles.box}>{props.children}</Box>;
}

export default SideBar;
