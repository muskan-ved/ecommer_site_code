import React from "react";
import { coupondetailBreadcrums } from "../../../../common/components/breadcrumbs/breadcrumbsData";
import Breadcrumb from "../../../../common/components/breadcrumbs";

const ViewCouponDetail = () => {
  return (
    <div className="container mx-12 pr-2">
      <Breadcrumb breadcrumbs={coupondetailBreadcrums} />
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden mt-4">
      </div>
    </div>
  );
};
export default ViewCouponDetail;
