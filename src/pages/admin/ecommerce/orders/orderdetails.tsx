import React from "react";
import { orderdetailBreadcrums } from "../../../../common/components/breadcrumbs/breadcrumbsData";
import Breadcrumb from "../../../../common/components/breadcrumbs";

const OrderDetail = () => {
  return (
    <div className="container mx-12 pr-2">
      <Breadcrumb breadcrumbs={orderdetailBreadcrums} />
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden mt-4">
      </div>
    </div>
  );
};
export default OrderDetail;
