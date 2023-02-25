import React from "react";
import { Link } from "react-router-dom";
const StudentRoommatePosts = () => {
  return (
    <>
      <div> Welcome to Your Roommate Posts</div>
      <Link to="/studentprofile/:userId/studentroommateposts/1">
        Roommate 1
      </Link>
      <Link to="/studentprofile/:userId/studentroommateposts/2">
        Roommate 2
      </Link>
      <Link to="/studentprofile/:userId/studentroommateposts/3">
        Roommate 3
      </Link>
      <Link to="/studentprofile/:userId/studentroommateposts/4">
        Roommate 4
      </Link>
    </>
  );
};

export default StudentRoommatePosts;
