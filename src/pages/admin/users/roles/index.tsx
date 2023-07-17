import React, { Fragment, useRef, useState } from 'react';
import Breadcrumb from '../../../../common/components/breadcrumbs';
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEditAlt } from 'react-icons/bi'
import { Dialog, Transition } from '@headlessui/react'
import DeleteConfirmBox from '../../../../common/components/alertmodel';
import { roleBreadcrums } from '../../../../common/components/breadcrumbs/breadcrumbsData';


const Roles = () => {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const [deleteConfirmBoxOpen, setdeleteConfirmBoxOpen] = React.useState(false);
    const [edittitle, setEdittitle] = React.useState(false);

    const AddRoleModelOpen = (identifier: string, id?: number) => {
        if (identifier = "edit") {
            setEdittitle(true);
        }
        else {
            setEdittitle(false);
        }
        setOpen(true);
    }
    const AddRoleModelClose = () => {
        setOpen(false);
    }

    //delete user
    const [deleteData, setDeleteData] = useState<any>({});
    function openDelete(data: any) {
        setdeleteConfirmBoxOpen(true);
        setDeleteData(data);
    }
    //delete role
    async function deleteUser() {
    }

    console.log(edittitle)

    return (
        <>
            <div className="container mx-12 pr-2">
                <Breadcrumb breadcrumbs={roleBreadcrums} />
                <div className="w-full bg-white border border-gray-200 shadow dark:bg-gray-500 dark:border-gray-700 p-2 mt-4 mb-4">
                    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div className="w-full md:w-1/2">
                                All(10)
                            </div>
                            <button
                                onClick={() => AddRoleModelOpen("")}
                                type="button"
                                className="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none"
                            >
                                <svg
                                    className="h-3.5 w-3.5 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        clip-rule="evenodd"
                                        fill-rule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    />
                                </svg>
                                Add New Role
                            </button>
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
                            <table
                                className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                            >
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
                                            <button type="button" className="text-red-600 bg-white border border-red-400 hover:bg-gray-100 font-lg rounded-md text-lg px-1.5 py-1.5 dark:bg-gray-800" onClick={() =>
                                                openDelete(
                                                    { id: 1 }
                                                )
                                            }><AiOutlineDelete /></button>
                                            <button type="button" className="text-yellow-500 bg-white border border-yellow-500 hover:bg-gray-100 font-medium rounded-md text-lg  px-1.5 py-1.5 dark:bg-gray-800 ml-2" ><BiEditAlt onClick={() => AddRoleModelOpen('edit', 1)} /></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="relative bg-white rounded-lg">
                                        <button onClick={AddRoleModelClose} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                        </button>
                                        <div className="px-6 py-6 lg:px-8">
                                            {edittitle ? (<h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Edit Role</h3>) : <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add New Role</h3>}
                                            <hr />
                                            <form className="space-y-6 mt-5" action="#">
                                                <div>
                                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role Name</label>
                                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                                </div>
                                                <div>
                                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 sm:ml-3 sm:w-auto"
                                            onClick={() => setOpen(false)}>
                                            ADD
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-800 sm:ml-3 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            CANCEL
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <DeleteConfirmBox
                open={deleteConfirmBoxOpen}
                closeDialog={() => setdeleteConfirmBoxOpen(false)}
                title={deleteData?.name}
                deleteFunction={deleteUser}
            />
        </>
    )
};
export default Roles;