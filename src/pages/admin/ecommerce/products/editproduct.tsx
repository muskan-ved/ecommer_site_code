import React, { useState } from 'react';
import Breadcrumb from '../../../../common/components/breadcrumbs';
import { EditProductBreadcrums } from '../../../../common/components/breadcrumbs/breadcrumbsData';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productValidations } from '../../../../formvalidations/productformvalidation';
import { ErrorShowing } from '../../../../common/components/errorshowingcmp/errorshowingcmp';
import { Link } from 'react-router-dom';

const EditProduct = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>({
        resolver: yupResolver(productValidations),
    });
    const onSubmit = (data: any) => {
        alert(JSON.stringify(data))
    }
    return (
        <div className="container mx-12 pr-2">
            <Breadcrumb breadcrumbs={EditProductBreadcrums} />
            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden mt-4">
                <div className="items-center justify-between p-5">
                    <div className="flex items-center justify-between mt-0 pt-0">
                        <p className="border-b-2 border-blue-900">Edit Product</p>
                    </div>
                    <div className="bg-white flex flex-col mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="-mx-3 md:flex mb-6 h-20">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            Product Name
                                        </label>
                                        <input type="text"
                                            {...register("productname")}
                                            className="w-full px-4 py-3 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Product Name...." />
                                        {errors && errors.productname
                                            ? ErrorShowing(errors?.productname?.message)
                                            : ""}
                                    </div>
                                </div>
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            Market Price
                                        </label>
                                        <input type="text"
                                            {...register("marketprice")}
                                            className="w-full px-4 py-3 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Market Price...." />
                                        {errors && errors.productname
                                            ? ErrorShowing(errors?.productname?.message)
                                            : ""}
                                    </div>
                                </div>
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            Selling Price
                                        </label>
                                        <input type="text"
                                            {...register("sellingprice")}
                                            className="w-full px-4 py-3 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Selling Price...." />
                                        {errors && errors.productname
                                            ? ErrorShowing(errors?.productname?.message)
                                            : ""}
                                    </div>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6 h-20">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            In Stock (Quantity)
                                        </label>
                                        <input type="text"
                                            {...register("quantity")}
                                            className="w-full px-4 py-3 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Quantity...." />
                                        {errors && errors.quantity
                                            ? ErrorShowing(errors?.quantity?.message)
                                            : ""}
                                    </div>
                                </div>
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            Product  Slug
                                        </label>
                                        <input type="text"
                                            {...register("productslug")}
                                            className="w-full px-4 py-3 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Product Slug...." />
                                        {errors && errors.productslug
                                            ? ErrorShowing(errors?.productslug?.message)
                                            : ""}
                                    </div>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6 h-20">
                                <div className="md:w-1/2 px-3">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            Product Category
                                        </label>
                                        <select className="w-full bg-white px-4 py-2 mt-1.5 text-gray-700 text-sm border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" {...register("productcategory")} id="location">
                                            <option value={""}>Select Category</option>
                                            <option value={"Men"}>Men</option>
                                            <option value={"Women"}>Women</option>
                                        </select>
                                        {errors && errors.productcategory
                                            ? ErrorShowing(errors?.productcategory?.message)
                                            : ""}
                                    </div>
                                </div>
                                <div className="md:w-1/2 px-3">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            Status
                                        </label>
                                        <select className="w-full bg-white px-4 py-2 mt-1.5 text-gray-700 text-sm border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" id="location">
                                            <option>Active</option>
                                            <option>Inactive</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block text-sm">
                                        Product Main Image
                                    </label>
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mt-1.5">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                                <div className="md:w-1/2 px-3">
                                    <label className="block text-sm">
                                        Product Sub Images
                                    </label>
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mt-1.5">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <div className="mt-2">
                                        <label className="block text-sm mb-2">
                                            Short Description
                                        </label>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data="<p>Hello from CKEditor 5!</p>"
                                            onReady={editor => {
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
                                <div className="md:w-1/2 px-3">
                                    <div className="mt-2">
                                        <label className="block text-sm mb-2">
                                            Long Description
                                        </label>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data="<p>Hello from CKEditor 5!</p>"
                                            onReady={editor => {
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
                            </div>
                            <div className="-mx-3 md:flex mt-8">
                                <div className="md:w-full px-3">
                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">UPDATE</button>
                                    <Link to={"/admin/ecommerce/products"}><button type="button" className=" ml-5 text-white bg-red-700 hover:bg-red-800  focus:outline-none  font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CANCEL</button></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
};
export default EditProduct;