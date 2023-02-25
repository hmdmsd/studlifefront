import { Routes, Route } from "react-router-dom";
import HousePost from "pages/student/HousePost";
import FurniturePost from "pages/student/FurniturePost";
import RoommatePost from "pages/student/RoommatePost";
import PostAFurniture from "pages/student/PostAFurniture";
import PostARoommate from "pages/student/PostARoommate";
import RoommatePosts from "components/student/RoommatePosts";
import FurniturePosts from "components/student/FurniturePosts";
import StudentHome from "pages/student/StudentHome";
import StudentHomeNavigation from "components/student/StudentHomeNavigation";
import HousePosts from "components/student/HousePosts";
const StudentHomeRoutes = () => {
  return (
    <>
      <StudentHomeNavigation />
      <Routes>
        <Route index path="/" element={<StudentHome />} />
        <Route path="houses" element={<HousePosts />} />
        <Route exact path="roommates" element={<RoommatePosts />} />
        <Route exact path="furnitures" element={<FurniturePosts />} />
        <Route path="houses/:postId" element={<HousePost />} />
        <Route path="furnitures/:postId" element={<FurniturePost />} />
        <Route path="roommates/:postId" element={<RoommatePost />} />
        <Route path="postfurniture" element={<PostAFurniture />} />
        <Route path="postroommate" element={<PostARoommate />} />
      </Routes>
    </>
  );
};

export default StudentHomeRoutes;
