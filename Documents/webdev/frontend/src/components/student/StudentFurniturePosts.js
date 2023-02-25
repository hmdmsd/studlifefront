import React from "react";
import { Link } from "react-router-dom";
const StudentFurniturePosts = () => {
  return (
    <>
      <div> Welcome to Your Furniture Posts</div>
      <Link to="/studentprofile/:userId/studentfurnitureposts/1">
        {" "}
        Furniture 1
      </Link>
      <Link to="/studentprofile/:userId/studentfurnitureposts/2">
        {" "}
        Furniture 2
      </Link>
      <Link to="/studentprofile/:userId/studentfurnitureposts/3">
        {" "}
        Furniture 3
      </Link>
      <Link to="/studentprofile/:userId/studentfurnitureposts/4">
        {" "}
        Furniture 4
      </Link>
    </>
  );
};

export default StudentFurniturePosts;
