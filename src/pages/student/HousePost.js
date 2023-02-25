import { Link } from "react-router-dom";

const HousePost = () => {
  return (
    <>
      <div> Welcome to Agency House Posts</div>
      <Link to="/agencyprofile/:userId/agencyhouseposts/:postId/update">
        Delete House 1
      </Link>
      <Link to="/agencyprofile/:userId/agencyhouseposts/:postId/delete">
        Update House 1
      </Link>
    </>
  );
};

export default HousePost;
