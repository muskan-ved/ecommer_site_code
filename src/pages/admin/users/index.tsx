import React from "react";
import Breadcrumb from "../../../common/components/breadcrumbs";
import { AiFillEye, AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt, BiSearch, BiRefresh } from "react-icons/bi";
import { RiAddLine, RiFilter2Fill, RiArrowDownSLine } from "react-icons/ri";
import { userBreadcrums } from "../../../common/components/breadcrumbs/breadcrumbsData";

const Users = () => {

  return (
 
    <div className="container mx-12 pr-8">

      <Breadcrumb breadcrumbs={userBreadcrums} />
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden mt-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          
          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          <div className="flex items-center space-x-3 w-full md:w-auto"> 
              {/* <button
                id="filterDropdownButton"
                data-dropdown-toggle="filterDropdown"
                className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="button"
              >
                <RiFilter2Fill className="text-lg mr-1 text-gray-400" />
                Filter
                <RiArrowDownSLine className="text-xl ml-2 " />
              </button> */}
            

<div className="text-sm font-medium text-center text-gray-500  dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px">
        <li className="mr-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">All (30)</a>
        </li>
        <li className="mr-2">
            <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Active(13)</a>
        </li>
        <li className="mr-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Inactive(17)</a>
        </li>
    </ul>
</div>

</div>
            </div>
            <div className="flex w-full:1/2 float-right justify-between">
            <button
              type="button"
              className="flex w-auto text-white bg-blue-700 mr-3 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none"
            >
              <RiAddLine className="text-lg mr-1" />
              Add product
            </button>

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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-primary-500 block w-md pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-primary-500"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
          </div>
          </div>
        </div>
        <body className="flex items-center justify-center">
	<div className="container">
		<table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
			<thead className="text-white">
				<tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th className="p-3 text-left">Name</th>
					<th className="p-3 text-left">Email</th>
					<th className="p-3 text-left">Actions</th>
				</tr>
				<tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th className="p-3 text-left">Name</th>
					<th className="p-3 text-left">Email</th>
					<th className="p-3 text-left">Actions</th>
				</tr>
                <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Actions</th>
              </tr>
                <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Actions</th>
              </tr>
			</thead>
			<tbody className="flex-1 sm:flex-none">
				<tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td className="border-grey-light border hover:bg-gray-100 p-3">John Covv</td>
					<td className="border-grey-light border hover:bg-gray-100 p-3 truncate">contato@johncovv.com</td>
					<td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">Delete</td>
				</tr>
				<tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td className="border-grey-light border hover:bg-gray-100 p-3">Michael Jackson</td>
					<td className="border-grey-light border hover:bg-gray-100 p-3 truncate">m_jackson@mail.com</td>
					<td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">Delete</td>
				</tr>
                <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                    <td className="border-grey-light border hover:bg-gray-100 p-3">Julia</td>
                    <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">julia@mail.com</td>
                    <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">Delete</td>
                </tr>
                <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td className="border-grey-light border hover:bg-gray-100 p-3">Martin Madrazo</td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">martin.madrazo@mail.com</td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">Delete</td>
                </tr>
			</tbody>
		</table>
	</div>
</body>
        <div className="overflow-x-auto">

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border-b border-t border-stroke dark:border-strokedark border-stroke dark:border-strokedark">
                <th scope="col" className="px-4 py-3">
                  ID
                </th>
                <th scope="col" className="px-4 py-3">
                  NAME
                </th>
                <th scope="col" className="px-4 py-3">
                  EMAIL
                </th>
                <th scope="col" className="px-4 py-3">
                  NUMBER
                </th>
                <th scope="col" className="px-4 py-3">
                  STATUS
                </th>
                <th scope="col" className="px-4 py-3">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                <th scope="row" className="px-4 py-3">
                  1
                </th>
                <td className="px-4 py-3">Shubham Kumar Jaiswal</td>
                <td className="px-4 py-3">sj2585097@gmail.com</td>
                <td className="px-4 py-3">9131649079</td>
                <td className="px-4 py-3">Active</td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    className="text-red-600 bg-white border border-red-400 hover:bg-gray-100 font-lg rounded-md text-lg px-1.5 py-1.5 dark:bg-gray-800"
                  >
                    <AiOutlineDelete />
                  </button>
                  <button
                    type="button"
                    className="text-yellow-500 bg-white border border-yellow-500 hover:bg-gray-100 font-medium rounded-md text-lg  px-1.5 py-1.5 dark:bg-gray-800 ml-2"
                  >
                    <BiEditAlt />
                  </button>
                  <button
                    type="button"
                    className="text-blue-600 bg-white border border-blue-600 hover:bg-gray-100 font-medium rounded-md text-lg  px-1.5 py-1.5 dark:bg-gray-800 ml-2"
                  >
                    <AiFillEye />
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                <th scope="row" className="px-4 py-3">
                  1
                </th>
                <td className="px-4 py-3">Shubham Kumar Jaiswal</td>
                <td className="px-4 py-3">sj2585097@gmail.com</td>
                <td className="px-4 py-3">9131649079</td>
                <td className="px-4 py-3">Active</td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    className="text-red-600 bg-white border border-red-400 hover:bg-gray-100 font-lg rounded-md text-lg px-1.5 py-1.5 dark:bg-gray-800"
                  >
                    <AiOutlineDelete />
                  </button>
                  <button
                    type="button"
                    className="text-yellow-500 bg-white border border-yellow-500 hover:bg-gray-100 font-medium rounded-md text-lg  px-1.5 py-1.5 dark:bg-gray-800 ml-2"
                  >
                    <BiEditAlt />
                  </button>
                  <button
                    type="button"
                    className="text-blue-600 bg-white border border-blue-600 hover:bg-gray-100 font-medium rounded-md text-lg  px-1.5 py-1.5 dark:bg-gray-800 ml-2"
                  >
                    <AiFillEye />
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                <th scope="row" className="px-4 py-3">
                  1
                </th>
                <td className="px-4 py-3">Shubham Kumar Jaiswal</td>
                <td className="px-4 py-3">sj2585097@gmail.com</td>
                <td className="px-4 py-3">9131649079</td>
                <td className="px-4 py-3">Active</td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    className="text-red-600 bg-white border border-red-400 hover:bg-gray-100 font-lg rounded-md text-lg px-1.5 py-1.5 dark:bg-gray-800"
                  >
                    <AiOutlineDelete />
                  </button>
                  <button
                    type="button"
                    className="text-yellow-500 bg-white border border-yellow-500 hover:bg-gray-100 font-medium rounded-md text-lg  px-1.5 py-1.5 dark:bg-gray-800 ml-2"
                  >
                    <BiEditAlt />
                  </button>
                  <button
                    type="button"
                    className="text-blue-600 bg-white border border-blue-600 hover:bg-gray-100 font-medium rounded-md text-lg  px-1.5 py-1.5 dark:bg-gray-800 ml-2"
                  >
                    <AiFillEye />
                  </button>
                </td>
              </tr>
            </tbody>
            
            
          </table>
        </div>
      </div>
    </div>
  );
};
export default Users;
