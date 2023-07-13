import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/dashboard";
import React from "react";

const Routing = () => {
  return (
    <Routes>
      <Route path="/dashboard/services1" element={<Dashboard />} />
    </Routes>
  );
};

export default Routing;
