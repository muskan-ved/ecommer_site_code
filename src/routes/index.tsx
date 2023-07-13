import { Route, Routes } from "react-router-dom";
import React from "react";
import SiteConfigration from "../pages/admin/dashboard/siteconfigration";
import Users from "../pages/admin/users";
import Roles from "../pages/admin/users/roles";

const Routing = () => {
  return (
    <Routes>
      <Route path="/admin/dashboard/siteconfigration" element={<SiteConfigration />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/user/roles" element={<Roles />} />

    </Routes>
  );
};

export default Routing;
