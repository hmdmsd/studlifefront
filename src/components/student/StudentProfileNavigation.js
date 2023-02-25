import SideBar from "components/common/Sidebar";
import { Link } from "react-router-dom";

const StudentProfileNavigation = () => {
  return (
    <SideBar>
      <Link to="/studentprofile/:userId/">My Informations</Link>
      <Link to="/studentprofile/:userId/updateinformations">
        Update Informations
      </Link>
      <Link to="/studentprofile/:userId/studentroommateposts">
        My Roommate Posts
      </Link>
      <Link to="/studentprofile/:userId/studentfurnitureposts">
        My Furniture Posts
      </Link>
    </SideBar>
  );
};

export default StudentProfileNavigation;
