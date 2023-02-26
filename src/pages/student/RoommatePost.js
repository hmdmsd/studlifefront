import Post from "components/student/Post";
import DetailsRoomate from "components/student/DetailsRoomate";
import House from "house.jpg";
import pic from "avatar.avif";



const RoommatePost = () => {
  return (
    <Post Details={DetailsRoomate} condition={true} postimage={House} avatarimage={pic}/>
  )
};

export default RoommatePost;
