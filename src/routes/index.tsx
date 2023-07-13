import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/dashboard";
import React from "react";
import SiteConfigration from "../pages/admin/dashboard/siteconfigration";

const Routing = () => {
  return (
    <Routes>
      <Route path="/dashboard/services1" element={<Dashboard />} />
      <Route path="/admin/dashboard/siteconfigration" element={<SiteConfigration />} />
    </Routes>
  );
};

export default Routing;
