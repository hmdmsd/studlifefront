import Post from "components/student/Post";
import DetailsFurniture from "components/student/DetailsFurniture";
import House from "house.jpg";
import pic from "avatar.avif";

const FurniturePost = () => {
  return (
    /*zid top bar ili fiha logo fou9 post*/
    <div>
    <Post Details={DetailsFurniture} condition={false} postimage={House} avatarimage={pic}/>
    </div>
  )
};

export default FurniturePost;
