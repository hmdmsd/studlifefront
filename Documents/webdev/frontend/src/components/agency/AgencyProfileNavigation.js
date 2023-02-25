import Navbar from "components/common/Navbar";
import SideBar from "components/common/Sidebar";
import { Link } from "react-router-dom";

const AgencyProfileNavigation = () => {
  return (
    <>
      <Navbar />
      <SideBar>
        <Link to="/agencyprofile/:userId/">My Informations</Link>
        <Link to="/agencyprofile/:userId/updateinformations">
          Update Informations
        </Link>
        <Link to="/agencyprofile/:userId/agencyhouseposts">My House Posts</Link>
      </SideBar>
    </>
  );
};

export default AgencyProfileNavigation;
