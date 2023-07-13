import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard";
import Sidebar from "./layouts/admin/sidebar";
import SiteConfigration from "./pages/admin/dashboard/siteconfigration";

const App = () => {
  return (
    <Sidebar>
      <Routes>
        <Route path="/hello" element={<Dashboard />} />
        <Route path="/admin/dashboard/siteconfigration" element={<SiteConfigration />} />
      </Routes>
    </Sidebar>
  );
};

export default App;
