import React from 'react';
import Breadcrumb from '../../../../common/components/breadcrumbs';
import { addsubscriptionBreadcrums } from '../../../../common/components/breadcrumbs/breadcrumbsData';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { ErrorShowing } from '../../../../common/components/errorshowingcmp/errorshowingcmp';
import { subscriptionValidations } from '../../../../formvalidations/subscriptionformvalidation';

const Addsubscription = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>({
        resolver: yupResolver(subscriptionValidations),
    });
    const onSubmit = (data: any) => {
        alert(JSON.stringify(data))
    }

    return (
        <div className="container mx-12 pr-2">
            <Breadcrumb breadcrumbs={addsubscriptionBreadcrums} />
            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden mt-4">
                <div className="items-center justify-between p-5">
                    <div className="flex items-center justify-between mt-0 pt-0">
                        <p className="border-b-2 border-blue-900">Add Subscription</p>
                    </div>
                    <div className="bg-white flex flex-col mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="-mx-3 md:flex mb-6 h-20">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            Subscription Name
                                        </label>
                                        <input type="text"
                                            {...register("name")}
                                            className="w-full px-4 py-3 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="user name...." />
                                        {errors && errors.name
                                            ? ErrorShowing(errors?.name?.message)
                                            : ""}
                                    </div>
                                </div>
                                <div className="md:w-1/2 px-3">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            Amount
                                        </label>
                                        <input type="text"
                                            {...register("price")}
                                            className="w-full px-4 py-3 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="email ...." />
                                        {errors && errors.price
                                            ? ErrorShowing(errors?.price?.message)
                                            : ""}
                                    </div>
                                </div>
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            Status
                                        </label>
                                        <select  {...register("status")} className="w-full bg-white px-4 py-2 mt-1.5 text-gray-700 text-sm border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" {...register("productcategory")} id="location">
                                            <option value={""}>Select Status</option>
                                            <option value={"Men"}>Men</option>
                                            <option value={"Women"}>Women</option>
                                        </select>
                                        {errors && errors.status
                                            ? ErrorShowing(errors?.status?.message)
                                            : ""}
                                    </div>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6 h-20">
                                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            Subscription Type
                                        </label>
                                        <select  {...register("status")} className="w-full bg-white px-4 py-2 mt-1.5 text-gray-700 text-sm border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" {...register("productcategory")} id="location">
                                            <option value={""}>Select Type</option>
                                            <option value={"Men"}>Men</option>
                                            <option value={"Women"}>Women</option>
                                        </select>
                                        {errors && errors.status
                                            ? ErrorShowing(errors?.status?.message)
                                            : ""}
                                    </div>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mt-8">
                                <div className="md:w-full px-3">
                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ADD</button>
                                    <Link to={"/admin/ecommerce/subscriptions"}><button type="button" className=" ml-5 text-white bg-red-700 hover:bg-red-800  focus:outline-none  font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CANCEL</button></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
};
export default Addsubscription;