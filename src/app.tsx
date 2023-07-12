import React from "react";
import { Routes, Route } from "react-router-dom";
import Hello from "./pages/hello";
import Sidebar from "./layouts/sidebar";

const App = () => {
  return (
    <Sidebar>
      <Routes>
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </Sidebar>
  );
};

export default App;
