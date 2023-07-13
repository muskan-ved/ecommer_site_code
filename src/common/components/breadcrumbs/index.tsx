import React from "react";
import { Link } from "react-router-dom";
export default function Breadcrumb(props: any) {
  return (
    <>
      <nav className="flex justify-between mt-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link to={props?.breadcrumbs?.previous_title_link} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              {props?.breadcrumbs?.icons}
              {props?.breadcrumbs?.previous_title}
            </Link>
          </li>
          {
            props?.breadcrumbs?.middle_title ? (<li>
              <div className="flex items-center">
                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <Link to={props?.breadcrumbs?.middle_title_link} className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">{props?.breadcrumbs?.middle_title}</Link>
              </div>
            </li>) : ""
          }
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="ml-1 text-sm font-medium text-blue-600 md:ml-2 dark:text-gray-400">{props?.breadcrumbs?.current_title}</span>
            </div>
          </li>
        </ol>
        {props?.breadcrumbs?.addbtn === "true" ? (<button type="button" className="flex items-center justify-center text-white bg-blue-700   font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
          <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
          </svg>
          {props?.breadcrumbs?.addbtn_name}
        </button>) : ""}
      </nav>
      <h2 className="text-1xl mt-1 font-extrabold dark:text-white">{props?.breadcrumbs?.breadcrumb_heading}</h2>
    </>

  );
}