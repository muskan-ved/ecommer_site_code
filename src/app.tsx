import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard";
import Sidebar from "./layouts/admin/sidebar";

const App = () => {
  return (
    <Sidebar>
      <Routes>
        <Route path="/hello" element={<Dashboard />} />
      </Routes>
    </Sidebar>
  );
};

export default App;
