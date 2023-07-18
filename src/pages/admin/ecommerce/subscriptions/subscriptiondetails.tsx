import React from "react";
import { subscriptiondetailsBreadcrums } from "../../../../common/components/breadcrumbs/breadcrumbsData";
import Breadcrumb from "../../../../common/components/breadcrumbs";

const SubscriptionDetails = () => {
    return (
        <div className="container mx-12 pr-2">
            <Breadcrumb breadcrumbs={subscriptiondetailsBreadcrums} />
            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden mt-4">

            </div>
        </div>
    );
};
export default SubscriptionDetails;
