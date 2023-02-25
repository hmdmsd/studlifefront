import AgencyProfileNavigation from "components/agency/AgencyProfileNavigation";
import AgencyProfile from "pages/agency/AgencyProfile";
import EditHouse from "components/agency/EditHouse";
import HousePost from "pages/student/HousePost";

import { Route, Routes } from "react-router-dom";
import AgencyHousePosts from "components/agency/AgencyHousePosts";
import RegisterForm from "components/auth/RegisterForm";

const AgencyProfileRoutes = () => {
  return (
    <>
      <AgencyProfileNavigation />
      <Routes>
        <Route index element={<AgencyProfile />} />
        <Route path="updateinformations" exact element={<RegisterForm />} />
        <Route path="agencyhouseposts" exact element={<AgencyHousePosts />} />
        <Route path="agencyhouseposts/:postId" exact element={<HousePost />} />
        <Route
          path="agencyhouseposts/:postId/updatehouse"
          exact
          element={<EditHouse />}
        />
      </Routes>
    </>
  );
};

export default AgencyProfileRoutes;
