import React, { Fragment, useEffect, useRef, useState } from 'react';
import Breadcrumb from '../../../../common/components/breadcrumbs';
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEditAlt, BiSearch } from 'react-icons/bi'
import { Dialog, Transition } from '@headlessui/react'
import DeleteConfirmBox from '../../../../common/components/alertmodel';
import { roleBreadcrums } from '../../../../common/components/breadcrumbs/breadcrumbsData';
import { RolesApis } from '../../../../apis/roles_http_api';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { roleValidations } from '../../../../formvalidations/userformValidation';
import { ErrorShowing } from '../../../../common/components/errorshowingcmp/errorshowingcmp';
import { RiAddLine } from 'react-icons/ri';
const Roles = () => {
    const [open, setOpen] = useState(false)
    const [deleteConfirmBoxOpen, setdeleteConfirmBoxOpen] = React.useState(false);
    const [edittitle, setEdittitle] = React.useState(false);
    useEffect(() => {
        getRoles();
    }, [])
    //get roles
    const getRoles = () => {
        RolesApis("GET", "").then((roles) => {
            console.log(roles)
        });
    }
    //model open
    const AddRoleModelOpen = (identifier: string, id?: number) => {
        if (identifier === "edit") {
            setEdittitle(true);
        }
        else {
            setEdittitle(false);
        }
        setOpen(true);
    }
    //model close
    const AddRoleModelClose = () => {
        setOpen(false);
        setEdittitle(false);
    }
    //delete role
    const [deleteData, setDeleteData] = useState<any>({});
    function openDelete(data: any) {
        setdeleteConfirmBoxOpen(true);
        setDeleteData(data);
    }
    async function deleteUser() {
    }

    //form submitation
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>({
        resolver: yupResolver(roleValidations),
    });

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data))
    }

    return (
        <>
            <div className="container mx-12 pr-2">
                <Breadcrumb breadcrumbs={roleBreadcrums} />
                <div className="w-full bg-white border border-gray-200 shadow dark:bg-gray-500 dark:border-gray-700 p-2 mt-4 mb-4">
                    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div className="w-full text-sm md:w-1/2">
                                <p className="font-bold text-sm">All(7)</p>
                            </div>
                            <div className="flex w-full:1/2 float-right justify-between">
                                <button
                                    onClick={() => AddRoleModelOpen("add")}
                                    type="button"
                                    className="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none"
                                >
                                    <RiAddLine className="text-lg mr-1" />
                                    Add New Role
                                </button>
                            </div>
                            <div className="w-auto">
                                <form className="flex items-center">
                                    <label htmlFor="simple-search" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <BiSearch className=" mr-1 text-gray-500" />
                                        </div>
                                        <input
                                            type="text"
                                            id="simple-search"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs text-gray-800 rounded-lg focus:border-primary-500 block w-md pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-primary-500"
                                            placeholder="Search"
                                            required
                                        />
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
                                        <th scope="row" className="px-4 py-3 xs:px-3 xs:py-1 font-normal text-sm">1</th>
                                        <td className="px-4 py-3 xs:px-3 xs:py-1 font-normal text-sm">Shubham Kumar Jaiswal</td>
                                        <td className="px-4 py-3 xs:px-3 xs:py-1 font-normal text-sm">Active</td>
                                        <td className="px-4 py-3 xs:px-3 xs:py-1 font-normal text-sm">10</td>
                                        <td className="px-4 py-3 xs:px-3 xs:py-1 font-normal text-sm">
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
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="relative bg-white rounded-lg">
                                            <button onClick={AddRoleModelClose} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                </svg>
                                            </button>
                                            <div className="px-6 py-6 lg:px-8">
                                                {edittitle === true ? (<h3 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">Edit Role</h3>) : <h3 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">Add New Role</h3>}
                                                <hr />
                                                <div className="space-y-3 mt-5">
                                                    <div className='h-20'>
                                                        <label htmlFor="rolename" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white" >Role Name</label>
                                                        <input
                                                            type="text"
                                                            {...register("name")}
                                                            className="w-full px-4 py-3 mt-1 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                            placeholder="Role Name ...." />
                                                        {errors && errors.name
                                                            ? ErrorShowing(errors?.name?.message)
                                                            : ""}
                                                    </div>
                                                    <div>
                                                        <label htmlFor="status" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                                                        <select id="countries" {...register("status")} className="w-full bg-white px-4 py-3 mt-1 text-gray-700 text-sm border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600">
                                                            <option value="1">Active</option>
                                                            <option value="0">Inactive</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 sm:ml-3 sm:w-auto"
                                                type="submit">
                                                SAVE
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex w-full justify-center rounded-md bg-red-700 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-800 sm:ml-3 sm:w-auto"
                                                onClick={() => setOpen(false)}
                                            >
                                                CANCEL
                                            </button>
                                        </div>
                                    </form>
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