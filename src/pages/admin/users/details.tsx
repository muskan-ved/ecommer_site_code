import React from "react";
import Breadcrumb from "../../../common/components/breadcrumbs";
import { ViewUserBreadcrums } from "../../../common/components/breadcrumbs/breadcrumbsData";

const ViewDetail = () => {
  return (
    <div className="container mx-12 pr-2">
      <Breadcrumb breadcrumbs={ViewUserBreadcrums} />
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden mt-4">
        <div className="items-center justify-between p-5">
          <p className="font-bold">View User Detail</p>
          <div className="bg-white flex flex-col mt-5">
            <div className="grid grid-rows-3 grid-flow-col gap-4">
              <div className="row-span-3">
                <img
                  src="/img1.jpeg"
                  alt="profile"
                  className="rounded-full h-32 w-32 inline-flex	"
                />
              </div>
              <div className="col-span-2">02</div>
              <div className="row-span-2 col-span-2">03</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewDetail;
