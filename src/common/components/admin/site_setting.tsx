import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { siteValidations } from "../../../formvalidations/siteconfigValidation";
import { ErrorShowing } from "../errorshowingcmp/errorshowingcmp";
export default function ManageSiteSetting() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>({
        resolver: yupResolver(siteValidations),
    });
    const onSubmit = (data: any) => {
        console.log(data);
        //alert(JSON.stringify(data))
    }

    console.log(errors)

    return (
        <>
            {/* <div className="flex items-center justify-between pb-4">
                <p className="font-bold">Site Configration</p>
            </div> */}
            <div className="flex items-center bg-gray-50">
                <div className="flex-1 h-full max-w-full mx-auto bg-white rounded-lg ">
                    <div className="flex flex-col md:flex-row">
                        {/* <div className="h-32 md:h-auto md:w-1/2 p-2">
                            <img className="object-cover w-full h-full" src="https://img.freepik.com/free-vector/setup-concept-illustration_114360-382.jpg?w=2000"
                                alt="img" />
                        </div> */}
                        <div className="flex items-center justify-center p-4  md:w-full">
                            <div className="w-full">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="flex items-center justify-between pb-4 mt-0 pt-0">
                                        <p className="border-b-2 border-blue-900">SITE INFORMATION</p>
                                    </div>
                                    <div className="bg-white flex flex-col mt-3">
                                        <div className="-mx-3 md:flex mb-6">
                                            <div className="md:w-full px-3 mb-6 md:mb-0">
                                                <div className="mt-2 h-20">
                                                    <label className="block text-sm">
                                                        Organisation Title
                                                    </label>
                                                    <input type="text"
                                                        className="w-full px-4 py-3 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                        {...register("organizationname")}
                                                        placeholder="Organization title ...." />
                                                    {errors && errors.organizationname
                                                        ? ErrorShowing(errors?.organizationname?.message)
                                                        : ""}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="-mx-3 md:flex mb-2">
                                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label className="block text-sm">
                                                    Organisation Logo
                                                </label>
                                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mt-1.5">
                                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>
                                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG, JPEG or GIF </p>
                                                    </div>
                                                    <input id="dropzone-file" type="file" {...register("organizationlogo")} className="hidden" />
                                                </label>
                                            </div>
                                            <div className="md:w-1/2 px-3">
                                                <label className="block  text-sm">
                                                    Organisation Favicon
                                                </label>
                                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mt-1.5">
                                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>
                                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG, JPEG or GIF</p>
                                                    </div>
                                                    <input id="dropzone-file" type="file"  {...register("organizationfavicon")} className="hidden" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="-mx-3 md:flex mt-5">
                                            <div className="md:w-full px-3">
                                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">UPDATE</button>
                                                <button type="button" className=" ml-5 text-white bg-red-700 hover:bg-red-800  focus:outline-none  font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CANCEL</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}