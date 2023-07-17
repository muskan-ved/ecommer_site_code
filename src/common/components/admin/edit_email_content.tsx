
import React, { useState } from "react";
import Breadcrumb from "../breadcrumbs";
import CodeMirror from '@uiw/react-codemirror';


const code = `/*
© Microsoft. All rights reserved.

This library is supported for use in Windows Tailored Apps only.

Build: 6.2.8100.0 
Version: 0.5 
*/

(function (global, undefined) {
"use strict";
undefinedVariable = {};
undefinedVariable.prop = 5;

function initializeProperties(target, members) {
  var keys = Object.keys(members);
  var properties;
  var i, len;
  for (i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    var enumerable = key.charCodeAt(0) !== /*_*/95;
    var member = members[key];
    if (member && typeof member === 'object') {
      if (member.value !== undefined || typeof member.get === 'function' || typeof member.set === 'function') {
        if (member.enumerable === undefined) {
          member.enumerable = enumerable;
        }
        properties = properties || {};
        properties[key] = member;
        continue;
      } 
    }
    if (!enumerable) {
      properties = properties || {};
      properties[key] = { value: member, enumerable: enumerable, configurable: true, writable: true }
      continue;
    }
    target[key] = member;
  }
  if (properties) {
    Object.defineProperties(target, properties);
  }
}

(function (rootNamespace) {

  // Create the rootNamespace in the global namespace
  if (!global[rootNamespace]) {
    global[rootNamespace] = Object.create(Object.prototype);
  }

  // Cache the rootNamespace we just created in a local variable
  var _rootNamespace = global[rootNamespace];
  if (!_rootNamespace.Namespace) {
    _rootNamespace.Namespace = Object.create(Object.prototype);
  }

  function defineWithParent(parentNamespace, name, members) {
    /// <summary locid="1">
    /// Defines a new namespace with the specified name, under the specified parent namespace.
    /// </summary>
    /// <param name="parentNamespace" type="Object" locid="2">
    /// The parent namespace which will contain the new namespace.
    /// </param>
    /// <param name="name" type="String" locid="3">
    /// Name of the new namespace.
    /// </param>
    /// <param name="members" type="Object" locid="4">
    /// Members in the new namespace.
    /// </param>
    /// <returns locid="5">
    /// The newly defined namespace.
    /// </returns>
    var currentNamespace = parentNamespace,
      namespaceFragments = name.split(".");

    for (var i = 0, len = namespaceFragments.length; i < len; i++) {
      var namespaceName = namespaceFragments[i];
      if (!currentNamespace[namespaceName]) {
        Object.defineProperty(currentNamespace, namespaceName, 
          { value: {}, writable: false, enumerable: true, configurable: true }
        );
      }
      currentNamespace = currentNamespace[namespaceName];
    }

    if (members) {
      initializeProperties(currentNamespace, members);
    }

    return currentNamespace;
  }

  function define(name, members) {
    /// <summary locid="6">
    /// Defines a new namespace with the specified name.
    /// </summary>
    /// <param name="name" type="String" locid="7">
    /// Name of the namespace.  This could be a dot-separated nested name.
    /// </param>
    /// <param name="members" type="Object" locid="4">
    /// Members in the new namespace.
    /// </param>
    /// <returns locid="5">
    /// The newly defined namespace.
    /// </returns>
    return defineWithParent(global, name, members);
  }

  // Establish members of the "WinJS.Namespace" namespace
  Object.defineProperties(_rootNamespace.Namespace, {

    defineWithParent: { value: defineWithParent, writable: true, enumerable: true },

    define: { value: define, writable: true, enumerable: true }

  });

})("WinJS");

(function (WinJS) {

  function define(constructor, instanceMembers, staticMembers) {
    /// <summary locid="8">
    /// Defines a class using the given constructor and with the specified instance members.
    /// </summary>
    /// <param name="constructor" type="Function" locid="9">
    /// A constructor function that will be used to instantiate this class.
    /// </param>
    /// <param name="instanceMembers" type="Object" locid="10">
    /// The set of instance fields, properties and methods to be made available on the class.
    /// </param>
    /// <param name="staticMembers" type="Object" locid="11">
    /// The set of static fields, properties and methods to be made available on the class.
    /// </param>
    /// <returns type="Function" locid="12">
    /// The newly defined class.
    /// </returns>
    constructor = constructor || function () { };
    if (instanceMembers) {
      initializeProperties(constructor.prototype, instanceMembers);
    }
    if (staticMembers) {
      initializeProperties(constructor, staticMembers);
    }
    return constructor;
  }

  function derive(baseClass, constructor, instanceMembers, staticMembers) {
    /// <summary locid="13">
    /// Uses prototypal inheritance to create a sub-class based on the supplied baseClass parameter.
    /// </summary>
    /// <param name="baseClass" type="Function" locid="14">
    /// The class to inherit from.
    /// </param>
    /// <param name="constructor" type="Function" locid="9">
    /// A constructor function that will be used to instantiate this class.
    /// </param>
    /// <param name="instanceMembers" type="Object" locid="10">
    /// The set of instance fields, properties and methods to be made available on the class.
    /// </param>
    /// <param name="staticMembers" type="Object" locid="11">
    /// The set of static fields, properties and methods to be made available on the class.
    /// </param>
    /// <returns type="Function" locid="12">
    /// The newly defined class.
    /// </returns>
    if (baseClass) {
      constructor = constructor || function () { };
      var basePrototype = baseClass.prototype;
      constructor.prototype = Object.create(basePrototype);
      Object.defineProperty(constructor.prototype, "_super", { value: basePrototype });
      Object.defineProperty(constructor.prototype, "constructor", { value: constructor });
      if (instanceMembers) {
        initializeProperties(constructor.prototype, instanceMembers);
      }
      if (staticMembers) {
        initializeProperties(constructor, staticMembers);
      }
      return constructor;
    } else {
      return define(constructor, instanceMembers, staticMembers);
    }
  }

  function mix(constructor) {
    /// <summary locid="15">
    /// Defines a class using the given constructor and the union of the set of instance members
    /// specified by all the mixin objects.  The mixin parameter list can be of variable length.
    /// </summary>
    /// <param name="constructor" locid="9">
    /// A constructor function that will be used to instantiate this class.
    /// </param>
    /// <returns locid="12">
    /// The newly defined class.
    /// </returns>
    constructor = constructor || function () { };
    var i, len;
    for (i = 0, len = arguments.length; i < len; i++) {
      initializeProperties(constructor.prototype, arguments[i]);
    }
    return constructor;
  }

  // Establish members of "WinJS.Class" namespace
  WinJS.Namespace.define("WinJS.Class", {
    define: define,
    derive: derive,
    mix: mix
  });

})(WinJS);

})(this);`;

export default function EditEmailContent() {
    const [openTab, setOpenTab] = React.useState(1);
    const [emailBodyText, setEmailBodyText] = useState<string>("");
    const breadcumbdata =
    {
        previous_title: "Dashboard",
        icons: <svg className="w-3 h-3 mr-2.5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
        </svg>,
        previous_title_link: "/admin/dashboard/siteconfigration",
        middle_title: "SiteConfigration",
        middle_title_link: "/admin/dashboard/siteconfigration",
        current_title: "Edit Email Content",
    }

    const handleemailbodytextchange = () => {

    }

    return (
        <>
            <div className="container mx-12 pr-2">
                <Breadcrumb breadcrumbs={breadcumbdata} />
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
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block text-black-100 text-sm mb-1" htmlFor="grid-email-type">
                                            E-Mail Type
                                        </label>
                                        <input className="w-full text-black-400 text-sm border border-gray-400 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="grid-email-type" type="text" placeholder="email..." />
                                        <p className="text-red-500 text-xs">Please fill out this field.</p>
                                    </div>
                                    <div className="w-full px-3 mt-5">
                                        <label className="block text-black-100 text-sm mb-1" htmlFor="grid-email-type">
                                            E-mail From
                                        </label>
                                        <input className="w-full  text-black-400 text-sm border border-gray-400 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="grid-email-type" type="text" placeholder="email..." />
                                        <p className="text-red-500 text-xs">Please fill out this field.</p>
                                    </div>
                                    <div className="w-full px-3 mt-5">
                                        <label className="block text-black-100 text-sm mb-1" htmlFor="grid-email-type">
                                            E-mail Subject
                                        </label>
                                        <input className="w-full  text-black-400 text-sm border border-gray-400 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="grid-email-type" type="text" placeholder="email..." />
                                        <p className="text-red-500 text-xs">Please fill out this field.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                <CodeMirror
                                    value={emailBodyText}
                                    height="307px"
                                    onChange={handleemailbodytextchange}
                                />
                            </div>
                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                <div dangerouslySetInnerHTML={{ __html: emailBodyText }}></div>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">UPDATE</button>
                            <button type="button" className=" ml-5 text-white bg-red-700 hover:bg-red-800  focus:outline-none  font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CANCEL</button>
                        </div>
                    </div>
                </div>
            </div >

        </>
    );
}