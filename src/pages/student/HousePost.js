import { Link } from "react-router-dom";
import Post from "components/student/Post";
import DetailsHome from "components/student/DetailsHome";
import House from "house.jpg";
import pic from "avatar.avif";

const HousePost = () => {
  return (
    <>
      <div> 
      <Post Details={DetailsHome} condition={true} postimage={House} avatarimage={pic}/>
      </div>
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
