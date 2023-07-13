import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/dashboard";
import React from "react";
import SiteConfigration from "../pages/admin/dashboard/siteconfigration";
import Error404 from "../common/components/error_code/404";
import Products from "../pages/admin/ecommerce/products";
import Resources from "../pages/admin/ecommerce/resources";
import Coupons from "../pages/admin/ecommerce/coupons";
import Subscriptions from "../pages/admin/ecommerce/subscriptions";
import Orders from "../pages/admin/ecommerce/orders";

const Routing = () => {
  return (
    <Routes>
      <Route  path="/dashboard/services1" element={<Dashboard />} />

      <Route  path="/admin/dashboard/siteconfigration" element={<SiteConfigration />} />

      <Route  path="/admin/ecommerce/products" element={<Products />} />
      <Route  path="/admin/ecommerce/resources" element={<Resources />} />
      <Route  path="/admin/ecommerce/coupons" element={<Coupons />} />
      <Route  path="/admin/ecommerce/subscriptions" element={<Subscriptions />} />
      <Route  path="/admin/ecommerce/orders" element={<Orders />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Routing;
