
import React, { useState } from "react";
import Breadcrumb from "../breadcrumbs";
import CodeMirror from '@uiw/react-codemirror';
import { EditEmailCntBreadcum } from "../breadcrumbs/breadcrumbsData";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { emailcontentValidations } from "../../../formvalidations/siteconfigValidation";
import { ErrorAlertShowing, ErrorShowing } from "../errorshowingcmp/errorshowingcmp";
import { Link } from "react-router-dom";

export default function EditEmailContent() {
  const [openTab, setOpenTab] = React.useState(1);
  const [emailBodyText, setEmailBodyText] = useState<string>("");
  //form submitation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(emailcontentValidations),
  });
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data))
  }
  const handleemailbodytextchange = (e: any) => {
    setEmailBodyText(e)
  }

  return (
    <>
      <div className="container mx-12 pr-2">
        <Breadcrumb breadcrumbs={EditEmailCntBreadcum} />
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded mt-6">
          <div className="text-sm font-medium text-center text-gray-600 border-b border-gray-300 dark:text-gray-600 ">
            <ul className="flex flex-wrap -mb-px">
              <li className="mr-2">
                <a href="general" className=
                  {"inline-block p-4 border-b-2 rounded-t-lg hover:text-blue-600 hover:border-blue-600"
                    + (openTab === 1
                      ? "active dark text-blue-600 border-blue-600"
                      : "hover:text-blue-600 hover:border-blue-600")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}>GENERAL EMAIL INFORMATION</a>
              </li>
              <li className="mr-2">
                <a href="#" className={"inline-block p-4 border-b-2 rounded-t-lg hover:text-blue-600 hover:border-blue-600" + (openTab === 2
                  ? "active dark text-blue-600 border-blue-600"
                  : "hover:text-blue-600 hover:border-blue-600")
                } aria-current="page" onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}>EMAIL BODY CONTENT</a>
              </li>
              <li className="mr-2">
                <a href="#" className={"inline-block p-4 border-b-2  rounded-t-lg hover:text-blue-600 hover:border-blue-600" + (openTab === 3
                  ? "active dark text-blue-600 border-blue-600"
                  : "hover:text-blue-600 hover:border-blue-600")
                } onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}>EMAIL PREVIEW</a>
              </li>
            </ul>
          </div>
          <div className="px-4 py-5 flex-auto">
            {emailBodyText === "" ? ErrorAlertShowing("Email body text feild is required") : ""}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 h-20">
                      <label className="block text-black-100 text-sm mb-1" htmlFor="grid-email-type">
                        E-Mail Type
                      </label>
                      <select {...register("emailtype")} className="w-full text-gray-600 text-xs border border-gray-400 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white bg-white focus:ring-1 focus:ring-blue-600">
                        <option value="">Select Email Type</option>
                        <option value="welcome_email">Canada</option>
                        <option value="forgat_password">United States</option>
                      </select>
                      {errors && errors.emailtype
                        ? ErrorShowing(errors?.emailtype?.message)
                        : ""}
                    </div>
                    <div className="w-full px-3 mt-5  h-20">
                      <label className="block text-black-100 text-sm mb-1" htmlFor="grid-email-type">
                        E-Mail From
                      </label>
                      <input className="w-full text-gray-700  text-xs border border-gray-400 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-600" type="text" {...register("emailfrom")} placeholder="From Email..." />
                      {errors && errors.emailfrom
                        ? ErrorShowing(errors?.emailfrom?.message)
                        : ""}
                    </div>
                    <div className="w-full px-3 mt-5  h-20">
                      <label className="block text-black-100 text-sm mb-1" htmlFor="grid-email-type">
                        E-Mail Subject
                      </label>
                      <input className="w-full text-gray-700 text-xs  border border-gray-400 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-600" type="text" {...register("emailsubject")} placeholder="Email Subject..." />
                      {errors && errors.emailsubject
                        ? ErrorShowing(errors?.emailsubject?.message)
                        : ""}
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <CodeMirror
                    value={emailBodyText}
                    height="315px"
                    className="text-sm font-medium text-gray-800"
                    onChange={handleemailbodytextchange}
                  />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="emailbodytext text-sm font-medium">
                    <div dangerouslySetInnerHTML={{ __html: emailBodyText }}></div>
                  </div>
                </div>
              </div>
              <div className="flex mt-5">
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">UPDATE</button>
                <Link to={"/admin/dashboard/siteconfigration"}>
                  <button type="button" className=" ml-5 text-white bg-red-700 hover:bg-red-800  focus:outline-none  font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CANCEL</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div >
    </>
  );
}