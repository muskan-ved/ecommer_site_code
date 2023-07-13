import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

import { NavLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { Menus } from "./menuItems";

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);
  const [subMenuText, setSubMenuText] = useState<string>("");
  const [selectedSubnavTitle, setSelectedSubnavTitle] = useState<string>("");
  

  const showSubnav = (menuName: string) => {
    setSubMenuText(menuName);
    setSubMenuOpen(true);
  };

  return (
    <section className="flex gap-6 ">
      <div
        className={`bg-white min-h-screen z-30 ${
          open ? "w-72" : "w-16"
        }  text-gray-100 px-4 pr-2.5 border-r-2 border-solid border-gray-200`}
        onMouseOver={() => {setOpen(true); selectedSubnavTitle!=="" && setSubMenuOpen(true);} }
        onMouseOut={() => setOpen(false)}
      >
        <div className="py-3 flex justify-end rounded-md cursor-pointer hover:bg-gray-200" onClick={() => setOpen(!open)}>
          <HiMenuAlt3 size={26} className="cursor-pointer fill-black " />
        </div>

        <ul className="pt-6 ">
          {Menus.map((Menu: any, index: number) => (
            <NavLink to={`${Menu?.path}`} key={index}>
              <li
                className={` relative flex flex-wrap rounded-md p-2 cursor-pointer hover:bg-gray-200 text-black text-sm items-center gap-x-4 
                                "mt-2" ${subMenuText === Menu.name &&  "bg-gray-200"}`}
                onClick={() => showSubnav(Menu.name)}
              >
                <div>{React.createElement(Menu?.icon, { size: "20" })}</div>
                {open ? <span>{Menu.name}</span> : null}

                {Menu.subMenus && (
                  <>
                    {open ? (
                      <BsChevronDown
                        className={`${
                          subMenuOpen &&
                          subMenuText === Menu.name &&
                          " rotate-180 fill-black"
                        }`}
                      />
                    ) : null}

                    {Menu.subMenus &&
                      subMenuOpen &&
                      open &&
                      subMenuText === Menu.name && (
                        <ul className="w-full ml-6 pt-2">
                          {Menu.subMenus.map(
                            (subMenuItem: any, idx: number): any => (
                              <NavLink to={subMenuItem.path} key={idx} onClick={() => setSelectedSubnavTitle(subMenuItem.name)}>
                                <li
                                  className={`flex rounded-md p-2  cursor-pointer hover:bg-gray-300 text-black text-sm items-center gap-x-4 w-56 ${selectedSubnavTitle === subMenuItem.name &&  "bg-gray-300"}`}
                                 
                                >
                                  <div>
                                    {React.createElement(subMenuItem?.icon, {
                                      size: "20",
                                    })}
                                  </div>
                                  <span
                                    className={`whitespace-pre duration-500 ${
                                      !open && "opacity-0  overflow-hidden"
                                    }`}
                                  >
                                    {subMenuItem.name}
                                  </span>
                                </li>
                              </NavLink>
                            )
                          )}
                        </ul>
                      )}
                  </>
                )}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className=" fixed ml-8 text-xl text-gray-900 font-semibold w-full">
        {children}
      </div>
    </section>
  );
};

export default Sidebar;
