
import React from "react";
export default function ManageSiteSetting() {
    return (
        <>
            <div className="flex items-center justify-between pb-4">
                <p className="font-bold">Site Configration</p>
            </div>
            <div className="flex items-center bg-gray-50">
                <div className="flex-1 h-full max-w-full mx-auto bg-white rounded-lg ">
                    <div className="flex flex-col md:flex-row">
                        <div className="h-32 md:h-auto md:w-1/2 p-2">
                            <img className="object-cover w-full h-full" src="https://source.unsplash.com/user/erondu/1600x900"
                                alt="img" />
                        </div>
                        <div className="flex items-center justify-center p-6  md:w-1/2">
                            <div className="w-full">
                                <div className="flex items-center justify-between pb-4 mt-0 pt-0">
                                    <p className="border-b-2 border-blue-900">SITE INFORMATION</p>
                                </div>
                                <div className="mt-2">
                                    <label className="block text-sm">
                                        Organisation Title
                                    </label>
                                    <input type="text"
                                        className="w-full px-4 py-4 mt-1.5 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        placeholder="Organization title ...." />
                                </div>
                                <div className="mt-6">
                                    <label className="block text-sm">
                                        Organisation Logo
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
                                <div className="mt-6">
                                    <label className="block mt-4 text-sm">
                                        Organisation Favicon
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
                                <button
                                    className="block w-full px-4 py-3 mt-6 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                                >
                                    UPDATE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}