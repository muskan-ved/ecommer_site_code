import React from 'react';
import Breadcrumb from '../../../../common/components/breadcrumbs';
import ManageEmailContent from '../../../../common/components/admin/email_setting';
import ManageSiteSetting from '../../../../common/components/admin/site_setting';
import ManagePaymentSetting from '../../../../common/components/admin/payment_setting';
import { DashboardBreadcums } from '../../../../common/components/breadcrumbs/breadcrumbsData';
const SiteConfigration = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <div className="container mx-12 pr-2">
            <Breadcrumb breadcrumbs={DashboardBreadcums} />
            <div className="flex flex-wrap mt-1">
                <div className="w-full">
                    <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
                        <li className="-mb-px  mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-blue-600"
                                        : "text-blue-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Manage Email Content
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-white bg-blue-600"
                                        : "text-blue-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Manage Site Settings
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 3
                                        ? "text-white bg-blue-600"
                                        : "text-blue-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Manage Organization Settings
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <ManageEmailContent />
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <ManageSiteSetting />
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <ManagePaymentSetting />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default SiteConfigration;

