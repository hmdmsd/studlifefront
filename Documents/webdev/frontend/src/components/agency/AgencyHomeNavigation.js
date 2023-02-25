import Navbar from "components/common/Navbar";
import SideBar from "components/common/Sidebar";
import { Link } from "react-router-dom";

const AgencyHomeNavigation = () => {
  return (
    <>
      <Navbar />
      <SideBar>
        <Link to="/agencyhome/posthouse">Rent a House</Link>
      </SideBar>
    </>
  );
};

export default AgencyHomeNavigation;
