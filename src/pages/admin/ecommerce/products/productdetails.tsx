import React from "react";
import { ProductDetailsBreadcrumb } from "../../../../common/components/breadcrumbs/breadcrumbsData";
import Breadcrumb from "../../../../common/components/breadcrumbs";

const ViewpProductDetail = () => {
  return (
    <div className="container mx-12 pr-2">
      <Breadcrumb breadcrumbs={ProductDetailsBreadcrumb} />
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden mt-4">

      </div>
    </div>
  );
};
export default ViewpProductDetail;
