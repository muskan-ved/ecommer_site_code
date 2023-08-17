import React, { useEffect } from "react";
import Sidebar from "./layouts/admin/sidebar";
import Header from "./layouts/admin/header";
import Routing from "./routes";
import { useLocation } from "react-router-dom";
import client from "./client";

const App = () => {

  useEffect(()=>{
    client.fetch('*[_type == "post"]').then((res)=>{
      console.log(res,"Response")
    }).catch((err)=>{
      console.log(err,"Error")
    })
  },[])

  const location: any = useLocation();
  console.log(location.pathname);
  return (location.pathname !== "/not-found" && location.pathname !== '/' &&  location.pathname !== '/login' &&  location.pathname !== '/register' && location.pathname !== 'resetpassword')? (
    <Sidebar>
      <Header />
      <div className="overflow-y-auto h-screen">
        <Routing />
      </div>
    </Sidebar>
  ) : (
    <div className="overflow-y-auto h-screen">
      <Routing />
    </div>
  );
};

export default App;
