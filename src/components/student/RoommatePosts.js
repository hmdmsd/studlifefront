import React from "react";
import { Link } from "react-router-dom";
const RoommatePosts = () => {
  return (
    <>
      <div> Welcome to Roommate Posts</div>
      <Link to="/studenthome/roommates/1"> Roommate 1</Link>
      <Link to="/studenthome/roommates/2"> Roommate 2</Link>
      <Link to="/studenthome/roommates/3"> Roommate 3</Link>
      <Link to="/studenthome/roommates/4"> Roommate 4</Link>
    </>
  );
};

export default RoommatePosts;
