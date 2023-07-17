import React from 'react';
import Breadcrumb from '../../../common/components/breadcrumbs';
import { AiFillEye, AiOutlineDelete } from 'react-icons/ai'
import { BiEditAlt } from 'react-icons/bi'
import { AddUserBreadcrums, EditUserBreadcrums } from '../../../common/components/breadcrumbs/breadcrumbsData';
const EditUser = () => {

    return (
        <div className="container mx-12 pr-2">
            <Breadcrumb breadcrumbs={EditUserBreadcrums} />
            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden mt-4">
                <div className="items-center justify-between p-5">
                    <p className="font-bold">Edit User</p>
                    <div className="bg-white flex flex-col mt-5">
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <div className="mt-2">
                                    <label className="block text-sm">
                                        User Name
                                    </label>
                                    <input type="text"
                                        className="w-full px-4 py-4 mt-1.5 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        placeholder="user name...." />
                                </div>
                            </div>
                            <div className="md:w-1/2 px-3">
                                <div className="mt-2">
                                    <label className="block text-sm">
                                        Email Address
                                    </label>
                                    <input type="text"
                                        className="w-full px-4 py-4 mt-1.5 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        placeholder="email ...." />
                                </div>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <div className="mt-2">
                                    <label className="block text-sm">
                                        Mobile Number
                                    </label>
                                    <input type="text"
                                        className="w-full px-4 py-4 mt-1.5 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        placeholder="user name...." />
                                </div>
                            </div>
                            <div className="md:w-1/2 px-3">
                                <div className="mt-2">
                                    <label className="block text-sm">
                                        Alternate Mobile Number
                                    </label>
                                    <input type="text"
                                        className="w-full px-4 py-4 mt-1.5 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        placeholder="email ...." />
                                </div>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mb-2">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block text-sm">
                                    Country
                                </label>
                                <select className="w-full bg-white px-4 py-4 mt-1.5 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" id="location">
                                    <option>Abuja</option>
                                    <option>Enugu</option>
                                    <option>Lagos</option>
                                </select>
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block text-sm">
                                    State
                                </label>
                                <select className="w-full bg-white px-4 py-4 mt-1.5 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" id="location">
                                    <option>Abuja</option>
                                    <option>Enugu</option>
                                    <option>Lagos</option>
                                </select>
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block text-sm">
                                    City
                                </label>
                                <select className="w-full bg-white px-4 py-4 mt-1.5 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" id="location">
                                    <option>Abuja</option>
                                    <option>Enugu</option>
                                    <option>Lagos</option>
                                </select>
                            </div>
                            <div className="md:w-1/2 px-3">
                                <label className="block text-sm">
                                    Pin Code
                                </label>
                                <input type="text"
                                    className="w-full bg-white px-4 py-4 mt-1.5 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    placeholder="email ...." />
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mt-5">
                            <div className="md:w-full px-3">
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">UPDATE</button>
                                <button type="button" className=" ml-5 text-white bg-red-700 hover:bg-red-800  focus:outline-none  font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CANCEL</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
};
export default EditUser;