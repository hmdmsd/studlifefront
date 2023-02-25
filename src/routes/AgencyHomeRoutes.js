import AgencyHomeNavigation from "components/agency/AgencyHomeNavigation";
import HouseForm from "components/agency/HouseForm";
import AgencyHome from "pages/agency/AgencyHome";

import { Route, Routes } from "react-router-dom";

const AgencyHomeRoutes = () => {
  return (
    <>
      <AgencyHomeNavigation />
      <Routes>
        <Route index element={<AgencyHome />} />
        <Route path="posthouse" exact element={<HouseForm />} />
      </Routes>
    </>
  );
};

export default AgencyHomeRoutes;
