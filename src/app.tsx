import React from "react";
import Sidebar from "./layouts/admin/sidebar";
import Header from "./layouts/admin/header";
import Routing from "./routes";
import { useLocation } from "react-router-dom";

const App = () => {
  const location:any = useLocation();
  return (

    location.pathname !== "/not-found"  ?
    <Sidebar>
      <Header />
      <Routing />
    </Sidebar> 
    : <Routing/>
  );
};

export default App;
