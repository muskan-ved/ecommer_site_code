import { Route, Routes } from "react-router-dom";
import React from "react";
import SiteConfigration from "../pages/admin/dashboard/siteconfigration";
import Users from "../pages/admin/users";
import Roles from "../pages/admin/users/roles";
import Error404 from "../common/components/error_code/404";
import Products from "../pages/admin/ecommerce/products";
import Resources from "../pages/admin/ecommerce/resources";
import Coupons from "../pages/admin/ecommerce/coupons";
import Subscriptions from "../pages/admin/ecommerce/subscriptions";
import Orders from "../pages/admin/ecommerce/orders";
import EditEmailContent from "../common/components/admin/edit_email_content";
import AddUser from "../pages/admin/users/adduser";

const Routing = () => {
  return (
    <Routes>
      <Route path="/admin/dashboard/siteconfigration" element={<SiteConfigration />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/user/roles" element={<Roles />} />
      <Route path="/admin/user/adduser" element={<AddUser />} />
      <Route path="/admin/user/edituser/:id" element={<AddUser />} />
      <Route path="/admin/dashboard/siteconfigration" element={<SiteConfigration />} />
      <Route path="/admin/siteconfigration/editemailcontent/:id" element={<EditEmailContent />} />
      <Route path="/admin/ecommerce/products" element={<Products />} />
      <Route path="/admin/ecommerce/resources" element={<Resources />} />
      <Route path="/admin/ecommerce/coupons" element={<Coupons />} />
      <Route path="/admin/ecommerce/subscriptions" element={<Subscriptions />} />
      <Route path="/admin/ecommerce/orders" element={<Orders />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Routing;
