import Navbar from "components/common/Navbar";
import SideBar from "components/common/Sidebar";
import { Link } from "react-router-dom";

const StudentHomeNavigation = () => {
  return (
    <>
      <Navbar />
      <SideBar>
        <Link to="/studenthome/houses">Find House</Link>
        <Link to="/studenthome/roommates">Find Roommate</Link>
        <Link to="/studenthome/furnitures">Find Furniture</Link>
        <Link to="/studenthome/postfurniture">Post Furniture</Link>
        <Link to="/studenthome/postroommate">Post Roommate</Link>
      </SideBar>
    </>
  );
};

export default StudentHomeNavigation;
