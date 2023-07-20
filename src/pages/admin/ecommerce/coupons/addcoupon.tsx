import React, { useState } from 'react';
import Breadcrumb from '../../../../common/components/breadcrumbs';
import { addcouponBreadcrums } from '../../../../common/components/breadcrumbs/breadcrumbsData';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { couponValidations } from '../../../../formvalidations/couponformvalidation';
import { ErrorShowing } from '../../../../common/components/errorshowingcmp/errorshowingcmp';

const AddCoupon = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>({
        resolver: yupResolver(couponValidations),
    });
    const onSubmit = (data: any) => {
        alert(JSON.stringify(data))
    }
    return (
        <div className="container mx-12 pr-2">
            <Breadcrumb breadcrumbs={addcouponBreadcrums} />
            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden mt-4">
                <div className="items-center justify-between p-5">
                    <div className="flex items-center justify-between mt-0 pt-0">
                        <p className="border-b-2 border-blue-900">Add Coupon</p>
                    </div>
                    <div className="bg-white flex flex-col mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="-mx-3 md:flex mb-6 h-20">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            Coupon Name
                                        </label>
                                        <input type="text"
                                            {...register("couponname")}
                                            className="w-full px-4 py-3 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Coupon Name...." />
                                        {errors && errors.couponname
                                            ? ErrorShowing(errors?.couponname?.message)
                                            : ""}
                                    </div>
                                </div>
                                <div className="md:w-1/2 px-3">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            Coupon Code
                                        </label>
                                        <input type="text"
                                            {...register("couponcode")}
                                            className="w-full px-4 py-3 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Coupon Code ...." />
                                        {errors && errors.couponcode
                                            ? ErrorShowing(errors?.couponcode?.message)
                                            : ""}
                                    </div>
                                </div>
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            Coupon Price
                                        </label>
                                        <input type="text"
                                            {...register("couponprice")}
                                            className="w-full px-4 py-3 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Coupon Price...." />
                                        {errors && errors.couponprice
                                            ? ErrorShowing(errors?.couponprice?.message)
                                            : ""}
                                    </div>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6 h-20">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            Satrt Date
                                        </label>
                                        <input type="text"
                                            className="w-full px-4 py-3 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="user name...." />
                                    </div>
                                </div>
                                <div className="md:w-1/2 px-3">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            End Date
                                        </label>
                                        <input type="text"
                                            className="w-full px-4 py-3 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="email ...." />
                                    </div>
                                </div>
                                <div className="md:w-1/2 px-3">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            Status
                                        </label>
                                        <select className="w-full bg-white px-4 py-2 mt-1.5 text-gray-700 text-sm border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" {...register("status")} id="location">
                                            <option value={""}>Select Status</option>
                                            <option value={"Men"}>Active</option>
                                            <option value={"Women"}>Inactive</option>
                                        </select>
                                        {errors && errors.status
                                            ? ErrorShowing(errors?.status?.message)
                                            : ""}
                                    </div>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <div className="mt-2">
                                        <label className="block text-sm mb-2">
                                            Terms & Conditions
                                        </label>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data="<p>Hello from CKEditor 5!</p>"
                                            onReady={editor => {
                                                // You can store the "editor" and use when it is needed.
                                                console.log('Editor is ready to use!', editor);
                                            }}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                console.log({ event, editor, data });
                                            }}
                                            onBlur={(event, editor) => {
                                                console.log('Blur.', editor);
                                            }}
                                            onFocus={(event, editor) => {
                                                console.log('Focus.', editor);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                                    <label className="block text-sm">
                                        Coupon Banner Image
                                    </label>
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mt-2">
                                        <div className="flex flex-col items-center justify-center pt-2 mb-3">
                                            <svg className="w-5 h-5 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mt-5">
                                <div className="md:w-full px-3">
                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ADD</button>
                                    <Link to={"/admin/ecommerce/coupons"}> <button type="button" className=" ml-5 text-white bg-red-700 hover:bg-red-800  focus:outline-none  font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CANCEL</button></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
};
export default AddCoupon;