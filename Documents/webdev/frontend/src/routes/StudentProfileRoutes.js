import { Routes, Route } from "react-router-dom";
import StudentProfile from "pages/student/StudentProfile";
import Navbar from "components/common/Navbar";
import StudentProfileNavigation from "components/student/StudentProfileNavigation";
import RoommatePost from "pages/student/RoommatePost";
import FurniturePost from "pages/student/FurniturePost";
import StudentRoommatePosts from "components/student/StudentRoommatePosts";
import StudentFurniturePosts from "components/student/StudentFurniturePosts";
import RegisterForm from "components/auth/RegisterForm";
import EditRoommate from "components/student/EditRoommate";
import EditFurniture from "components/student/EditFurniture";
const StudentProfileRoutes = () => {
  return (
    <>
      <Navbar />
      <StudentProfileNavigation />
      <Routes>
        <Route index element={<StudentProfile />} />
        <Route path="updateinformations" element={<RegisterForm />} />
        <Route path="studentroommateposts" element={<StudentRoommatePosts />} />
        <Route
          path="studentfurnitureposts"
          element={<StudentFurniturePosts />}
        />
        <Route path="studentroommateposts/:postId" element={<RoommatePost />} />
        <Route
          path="studentfurnitureposts/:postId"
          element={<FurniturePost />}
        />

        <Route
          path="studentroommateposts/:postId/updateroommate"
          element={<EditRoommate />}
        />
        <Route
          path="studentfurnitureposts/:postId/updatefurniture"
          element={<EditFurniture />}
        />
      </Routes>
    </>
  );
};

export default StudentProfileRoutes;
