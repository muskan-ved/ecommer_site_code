import React from "react";
import { Link } from "react-router-dom";
export default function Breadcrumb(props: any) {
  return (
    <div>
      <nav className="flex mt-4" aria-label="Breadcrumb">
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
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{props?.breadcrumbs?.current_title}</span>
            </div>
          </li>
        </ol>
      </nav>
      <h2 className="text-1xl mt-3 font-extrabold dark:text-white">SITE CONFIGRATION</h2>
    </div>

  );
}