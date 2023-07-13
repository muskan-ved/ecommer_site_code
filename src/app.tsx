import React from "react";
import Sidebar from "./layouts/admin/sidebar";
import Header from "./layouts/admin/header";
import Routing from "./routes";

const App = () => {
  return (
    <Sidebar>
      <Header />
      <Routing />
    </Sidebar>
  );
};

export default App;
