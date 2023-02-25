import React from "react";
import { Link } from "react-router-dom";
const HousePosts = () => {
  return (
    <>
      <div> Welcome to House Posts</div>
      <Link to="/studenthome/houses/1"> House 1</Link>
      <Link to="/studenthome/houses/2"> House 2</Link>
    </>
  );
};

export default HousePosts;
