import React, { useState } from 'react';
import Breadcrumb from '../../../common/components/breadcrumbs';
import { AiFillEye, AiOutlineDelete } from 'react-icons/ai'
import { BiEditAlt } from 'react-icons/bi'
import { AddUserBreadcrums, EditUserBreadcrums } from '../../../common/components/breadcrumbs/breadcrumbsData';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { adduserValidations } from '../../../formvalidations/userformValidation';
import { ErrorShowing } from '../../../common/components/errorshowingcmp/errorshowingcmp';
const EditUser = () => {
    const [profilepic, setprofilepic] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>({
        resolver: yupResolver(adduserValidations),
    });


    const handleimagechange = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e: any) => {
            setprofilepic(e.target.result);
        };
        reader.readAsDataURL(file);
    }


    const onSubmit = (data: any) => {
        alert(JSON.stringify(data))
    }
    return (
        <div className="container mx-12 pr-2">
            <Breadcrumb breadcrumbs={EditUserBreadcrums} />

            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden mt-4">
                <div className="items-center justify-between p-5">
                    <div className="flex items-center justify-between mt-0 pt-0">
                        <p className="border-b-2 border-blue-900">Edit User</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="bg-white flex flex-col mt-5">
                            <div className="-mx-3 md:flex mb-6 h-20">
                                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            Name
                                        </label>
                                        <input type="text"
                                            {...register("name")}
                                            className="w-full px-4 py-3 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Name...." />
                                        {errors && errors.name
                                            ? ErrorShowing(errors?.name?.message)
                                            : ""}
                                    </div>
                                </div>
                                <div className="md:w-1/3 px-3">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            Email Address
                                        </label>
                                        <input type="text"
                                            {...register("email")}
                                            className="w-full px-4 py-3 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Email ...." />
                                        {errors && errors.email
                                            ? ErrorShowing(errors?.email?.message)
                                            : ""}
                                    </div>
                                </div>
                                <div className="md:w-1/3 px-3">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            Alternate Email Address
                                        </label>
                                        <input type="text"
                                            {...register("alternatemail")}
                                            className="w-full px-4 py-3 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Alternate Email ...." />
                                    </div>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6 h-20">
                                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            Number
                                        </label>
                                        <input type="text"
                                            {...register("number")}
                                            className="w-full px-4 py-3 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Number...." />
                                        {errors && errors.number
                                            ? ErrorShowing(errors?.number?.message)
                                            : ""}
                                    </div>
                                </div>
                                <div className="md:w-1/3 px-3">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            Alternate Number
                                        </label>
                                        <input type="text"
                                            {...register("alternamenumber")}
                                            className="w-full px-4 py-3 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Alternate Number ...." />
                                    </div>
                                </div>
                                <div className="md:w-1/3 px-3">
                                    <div className="mt-2">
                                        <label className="block text-sm">
                                            UserName
                                        </label>
                                        <input type="text"
                                            {...register("username")}
                                            className="w-full px-4 py-3 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="UserName ...." />
                                        {errors && errors.username
                                            ? ErrorShowing(errors?.username?.message)
                                            : ""}
                                    </div>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block text-sm">
                                        Gender
                                    </label>
                                    <select  {...register("gender")} className="w-full bg-white px-4 py-3 mt-1.5 text-gray-700 text-sm border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" id="location">
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block text-sm">
                                        User Role
                                    </label>
                                    <select  {...register("userrole")} className="w-full bg-white px-4 py-3 mt-1.5 text-gray-700 text-sm border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" id="location">
                                        <option>Admin</option>
                                        <option>Staffer</option>
                                    </select>
                                </div>
                                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block text-sm">
                                        Profile Pic
                                    </label>
                                    <div className="flex items-center justify-center w-full mt-1.5">
                                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-12 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col items-center justify-center">
                                                <svg className="w-8 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                </svg>
                                                <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> (SVG, PNG, JPG, JPEG or GIF)</p>
                                            </div>
                                            <input id="dropzone-file" type="file" accept=".gif,.jpg,.jpeg,.png,.svg"  {...register("profilepic")} onChange={handleimagechange} className="hidden" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-1/4 px-3 md:mb-0">
                                    <label className="block text-sm">
                                        Country
                                    </label>
                                    <select  {...register("country")} className="w-full bg-white px-4 py-3 mt-1.5 text-gray-700 text-sm border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" id="location">
                                        <option>India</option>
                                        <option>US</option>
                                        <option>UK</option>
                                    </select>
                                </div>
                                <div className="md:w-1/4 px-3 md:mb-0">
                                    <label className="block text-sm">
                                        State
                                    </label>
                                    <select   {...register("state")} className="w-full bg-white px-4 py-3 mt-1.5 text-gray-700 text-sm border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" id="location">
                                        <option>MP</option>
                                        <option>UP</option>
                                        <option>CG</option>
                                    </select>
                                </div>
                                <div className="md:w-1/4 px-3 md:mb-0">
                                    <label className="block text-sm">
                                        City
                                    </label>
                                    <select  {...register("city")} className="w-full bg-white px-4 py-3 mt-1.5 text-gray-700 text-sm border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" id="location">
                                        <option>REWA</option>
                                        <option>BHOPAL</option>
                                        <option>INDORE</option>
                                    </select>
                                </div>
                                <div className="md:w-1/4 px-3">
                                    <label className="block text-sm">
                                        Pin Code
                                    </label>
                                    <input type="text"
                                        {...register("pincode")}
                                        className="w-full px-4 py-3.5 mt-1.5 text-gray-700 text-xs border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        placeholder="Pincode...." />
                                </div>
                            </div>
                            <div className="-mx-3 md:flex">
                                <div className="md:w-full px-3">
                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">UPDATE</button>
                                    <Link to={"/admin/users"}><button type="button" className=" ml-5 text-white bg-red-700 hover:bg-red-800  focus:outline-none  font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CANCEL</button></Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
};
export default EditUser;