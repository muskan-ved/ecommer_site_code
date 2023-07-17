import React, { useState } from "react";
import Breadcrumb from "../../../common/components/breadcrumbs";
import { BiSearch } from "react-icons/bi";
import { RiAddLine } from "react-icons/ri";
import { userBreadcrums } from "../../../common/components/breadcrumbs/breadcrumbsData";
import DeleteConfirmBox from "../../../common/components/alertmodel";
import { AiFillEye, AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import Pagination from "../../../common/functions/pagination/pagination";

const Users = () => {
  const [deleteConfirmBoxOpen, setdeleteConfirmBoxOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [deleteData, setDeleteData] = useState<any>({});
  const headersData = ["id", "name", "email", "contact", "status", "actions"];
  const rowsData = [
    {
      id: "1",
      name: "shubham jaiswal",
      email: "shubham@gmail.com",
      contact: "9870654321",
      status: "active",
    },
    {
      id: "2",
      name: "muskan ved",
      email: "muskan@gmail.com",
      contact: "9874444321",
      status: "inactive",
    },
    {
      id: "3",
      name: "shourya luthra",
      email: "shourya@gmail.com",
      contact: "9870222121",
      status: "active",
    },
    {
      id: "4",
      name: "shubham jaiswal",
      email: "shubham@gmail.com",
      contact: "9870654321",
      status: "active",
    },
    {
      id: "5",
      name: "muskan ved",
      email: "muskan@gmail.com",
      contact: "9874444321",
      status: "inactive",
    },
    {
      id: "6",
      name: "shourya luthra",
      email: "shourya@gmail.com",
      contact: "9870222121",
      status: "active",
    },
    {
      id: "7",
      name: "shubham jaiswal",
      email: "shubham@gmail.com",
      contact: "9870654321",
      status: "active",
    },
    {
      id: "8",
      name: "muskan ved",
      email: "muskan@gmail.com",
      contact: "9874444321",
      status: "inactive",
    },
    {
      id: "9",
      name: "shourya luthra",
      email: "shourya@gmail.com",
      contact: "9870222121",
      status: "active",
    },
    {
      id: "10",
      name: "shubham jaiswal",
      email: "shubham@gmail.com",
      contact: "9870654321",
      status: "active",
    },
    {
      id: "11",
      name: "muskan ved",
      email: "muskan@gmail.com",
      contact: "9874444321",
      status: "inactive",
    },
    {
      id: "12",
      name: "shourya luthra",
      email: "shourya@gmail.com",
      contact: "9870222121",
      status: "active",
    },
    {
      id: "13",
      name: "shubham jaiswal",
      email: "shubham@gmail.com",
      contact: "9870654321",
      status: "active",
    },
    {
      id: "14",
      name: "muskan ved",
      email: "muskan@gmail.com",
      contact: "9874444321",
      status: "inactive",
    },
    {
      id: "15",
      name: "shourya luthra",
      email: "shourya@gmail.com",
      contact: "9870222121",
      status: "active",
    },
    {
      id: "1",
      name: "shubham jaiswal",
      email: "shubham@gmail.com",
      contact: "9870654321",
      status: "active",
    },
    {
      id: "2",
      name: "muskan ved",
      email: "muskan@gmail.com",
      contact: "9874444321",
      status: "inactive",
    },
    {
      id: "3",
      name: "shourya luthra",
      email: "shourya@gmail.com",
      contact: "9870222121",
      status: "active",
    },
    {
      id: "4",
      name: "shubham jaiswal",
      email: "shubham@gmail.com",
      contact: "9870654321",
      status: "active",
    },
    {
      id: "5",
      name: "muskan ved",
      email: "muskan@gmail.com",
      contact: "9874444321",
      status: "inactive",
    },
    {
      id: "6",
      name: "shourya luthra",
      email: "shourya@gmail.com",
      contact: "9870222121",
      status: "active",
    },
    {
      id: "7",
      name: "shubham jaiswal",
      email: "shubham@gmail.com",
      contact: "9870654321",
      status: "active",
    },
    {
      id: "8",
      name: "muskan ved",
      email: "muskan@gmail.com",
      contact: "9874444321",
      status: "inactive",
    },
    {
      id: "9",
      name: "shourya luthra",
      email: "shourya@gmail.com",
      contact: "9870222121",
      status: "active",
    },
    {
      id: "10",
      name: "shubham jaiswal",
      email: "shubham@gmail.com",
      contact: "9870654321",
      status: "active",
    },
    {
      id: "11",
      name: "muskan ved",
      email: "muskan@gmail.com",
      contact: "9874444321",
      status: "inactive",
    },
    {
      id: "12",
      name: "shourya luthra",
      email: "shourya@gmail.com",
      contact: "9870222121",
      status: "active",
    },
    {
      id: "13",
      name: "shubham jaiswal",
      email: "shubham@gmail.com",
      contact: "9870654321",
      status: "active",
    },
    {
      id: "14",
      name: "muskan ved",
      email: "muskan@gmail.com",
      contact: "9874444321",
      status: "inactive",
    },
    {
      id: "15",
      name: "shourya luthra",
      email: "shourya@gmail.com",
      contact: "9870222121",
      status: "active",
    },
  ];

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = rowsData.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

const paginateFront = () => setCurrentPage(currentPage + 1);
const paginateBack = () => setCurrentPage(currentPage - 1);

  function openDelete(data: any) {
    setdeleteConfirmBoxOpen(true);
    setDeleteData(data);
  }

  //delete role
  async function deleteUser() {}
  return (
    <>
      <div className="container mx-12 pr-8">
        <Breadcrumb breadcrumbs={userBreadcrums} />
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden mt-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <div className="flex items-center space-x-3 w-full md:w-auto">
                <div className="text-sm font-medium text-center text-gray-500  dark:text-gray-400 dark:border-gray-700">
                  <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2">
                      <a
                        href="#"
                        className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      >
                        All (30)
                      </a>
                    </li>
                    <li className="mr-2">
                      <a
                        href="#"
                        className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                        aria-current="page"
                      >
                        Active(13)
                      </a>
                    </li>
                    <li className="mr-2">
                      <a
                        href="#"
                        className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      >
                        Inactive(17)
                      </a>
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

          <div className="overflow-x-auto ">
            <table className="w-full sm:bg-white rounded-lg overflow-hidden  my-5 text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase text-left	 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 hidden sm:table-header-group">
                <tr className="border-b border-t border-stroke dark:border-strokedark border-stroke dark:border-strokedark ">
                  {headersData &&
                    headersData?.map((headData: string) => (
                      <th scope="col" className="px-4 py-3">
                        {headData}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody className="flex-1 sm:flex-none">
                {currentPosts.length > 0 ? (
                  currentPosts.map((rowData: any) => {
                    return (
                      <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                        <td
                          scope="row"
                          className="px-4 py-3 font-normal text-sm	"
                        >
                          {rowData.id}
                        </td>
                        <td className="px-4 py-3 xs:px-3 xs:py-1 font-normal text-sm	">
                          {rowData.name}
                        </td>
                        <td className="px-4 py-3 xs:px-3 xs:py-1 font-normal text-sm	">
                          {rowData.email}
                        </td>
                        <td className="px-4 py-3 xs:px-3 xs:py-1 font-normal text-sm">
                          {rowData.contact}
                        </td>
                        <td className="px-4 py-3 xs:px-3 xs:py-1 font-normal text-sm	">
                          {rowData.status}
                        </td>
                        <td className="px-4 py-3 xs:px-3 xs:py-1 font-normal text-sm	">
                          <button
                            type="button"
                            className="text-red-600 bg-white border border-red-400 hover:bg-gray-100 font-sm rounded-md text-sm px-1.5 py-1.5 dark:bg-gray-800"
                            onClick={() => openDelete({ id: rowData.id })}
                          >
                            <AiOutlineDelete />
                          </button>
                          <Link to={"/admin/user/edituser/1"}>
                            <button
                              type="button"
                              className="text-yellow-500 bg-white border border-yellow-500 hover:bg-gray-100 font-medium rounded-md text-sm  px-1.5 py-1.5 dark:bg-gray-800 ml-2"
                            >
                              <BiEditAlt />
                            </button>
                          </Link>
                          <button
                            type="button"
                            className="text-blue-600 bg-white border border-blue-600 hover:bg-gray-100 font-medium rounded-md text-sm  px-1.5 py-1.5 dark:bg-gray-800 ml-2"
                          >
                            <AiFillEye />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr className=" mb-2 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                    <td
                      className="px-4 py-3 xs:px-3 xs:py-1 font-normal text-sm text-center"
                      colSpan={6}
                    >
                      Record not found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* pagination */}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={rowsData.length}
            paginate={paginate}
            currentPage={currentPage}
            paginateBack={paginateBack}
        paginateFront={paginateFront}
          />
        </div>
      </div>
      <DeleteConfirmBox
        open={deleteConfirmBoxOpen}
        closeDialog={() => setdeleteConfirmBoxOpen(false)}
        title={deleteData?.name}
        deleteFunction={deleteUser}
      />
    </>
  );
};
export default Users;
