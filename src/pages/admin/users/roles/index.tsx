import React from 'react';
import Breadcrumb from '../../../../common/components/breadcrumbs';
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEditAlt } from 'react-icons/bi'
import { roleBreadcrums } from '../../../../common/components/breadcrumbs/breadcrumbsData';

const Roles = () => {
    return (
        <div className="container mx-12 pr-2">
            <Breadcrumb breadcrumbs={roleBreadcrums} />
            <div className="w-full bg-white border border-gray-200 shadow dark:bg-gray-500 dark:border-gray-700 p-2 mt-4 mb-4">
                <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div className="w-full md:w-1/2">
                            All(10)
                        </div>
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <form className="flex items-center">
                                <label htmlFor="simple-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-blue-500" placeholder="Search" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr className="border-b border-t border-stroke dark:border-strokedark border-stroke dark:border-strokedark">
                                    <th scope="col" className="px-4 py-3">ID</th>
                                    <th scope="col" className="px-4 py-3">NAME</th>
                                    <th scope="col" className="px-4 py-3">STATUS</th>
                                    <th scope="col" className="px-4 py-3">Number of Users</th>
                                    <th scope="col" className="px-4 py-3">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-4 py-3">1</th>
                                    <td className="px-4 py-3">Shubham Kumar Jaiswal</td>
                                    <td className="px-4 py-3">Active</td>
                                    <td className="px-4 py-3">10</td>
                                    <td className="px-4 py-3">
                                        <button type="button" className="text-red-600 bg-white border border-red-400 hover:bg-gray-100 font-lg rounded-md text-lg px-1.5 py-1.5 dark:bg-gray-800"><AiOutlineDelete /></button>
                                        <button type="button" className="text-yellow-500 bg-white border border-yellow-500 hover:bg-gray-100 font-medium rounded-md text-lg  px-1.5 py-1.5 dark:bg-gray-800 ml-2"><BiEditAlt /></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div >
    )
};
export default Roles;