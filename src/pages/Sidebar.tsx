import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

const Sidebar = ({ children }) => {
  const menus = [
    { name: "dashboard", linkk: "/hello", icon: MdOutlineDashboard },
    { name: "user", linkk: "/", icon: AiOutlineUser },
    { name: "messages", linkk: "/", icon: FiMessageSquare },
    { name: "analytics", linkk: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", linkk: "/", icon: FiFolder },
    { name: "Cart", linkk: "/", icon: FiShoppingCart },
    { name: "Saved", linkk: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", linkk: "/", icon: RiSettings4Line },
    {
      name: "Services",
      icon: RiSettings4Line,
      subMenus: [
        {
          name: "Service 1",
          linkk: "/services/services1",
          icon: RiSettings4Line,
        },
        {
          name: "Service 2",
          linkk: "/services/services2",
          icon: RiSettings4Line,
        },
        {
          name: "Service 3",
          linkk: "/services/services3",
          icon: RiSettings4Line,
        },
      ],
    },
    {
      name: "Services3343",
      icon: RiSettings4Line,
      subMenus: [
        {
          name: "Services3343 1",
          linkk: "/Services3343s/Services3343s1",
          icon: RiSettings4Line,
        },
        {
          name: "Services3343 2",
          linkk: "/Services3343s/Services3343s2",
          icon: RiSettings4Line,
        },
        {
          name: "Services3343 3",
          linkk: "/Services3343s/Services3343s3",
          icon: RiSettings4Line,
        },
      ],
    },
  ];
  const [open, setOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subMenuText, setSubMenuText] = useState("");

  const showSubnav = (menuName) => {
    setSubMenuText(menuName);
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen z-50 ${
          open ? "w-72" : "w-16"
        }  text-gray-100 px-4`}
        onMouseOver={() => setOpen(true)}
        onMouseOut={() => setOpen(false)}
      >
        <div className="py-3 flex justify-end" onClick={() => setOpen(!open)}>
          <HiMenuAlt3 size={26} className="cursor-pointer" />
        </div>

        <ul className="pt-6 ">
          {menus.map((Menu, index) => (
            <NavLink to={`${Menu.linkk}`} key={index}>
              <li
                className={` relative flex flex-wrap rounded-md p-2 cursor-pointer hover:bg-gray-800 text-white text-sm items-center gap-x-4 
                                ${Menu.margin ? "mt-9" : "mt-2"} `}
              >
                <div>{React.createElement(Menu?.icon, { size: "20" })}</div>
                {open ? <span>{Menu.name}</span> : null}

                {Menu.subMenus && (
                  <>
                    {open ? (
                      <BsChevronDown
                        onClick={() => showSubnav(Menu.name)}
                        className={`${
                          subMenuOpen &&
                          subMenuText === Menu.name &&
                          " rotate-180"
                        }`}
                      />
                    ) : null}

                    {Menu.subMenus &&
                      subMenuOpen &&
                      open &&
                      subMenuText === Menu.name && (
                        <ul className="w-full ml-6 pt-2">
                          {Menu.subMenus.map((subMenuItem, idx) => (
                            <NavLink to={subMenuItem.linkk} key={idx}>
                              <li
                                className={`flex rounded-md p-2  cursor-pointer hover:bg-black text-white text-sm items-center gap-x-4 w-56`}
                              >
                                <div>
                                  {React.createElement(Menu?.icon, {
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
                          ))}
                        </ul>
                      )}
                  </>
                )}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="m-3 fixed ml-24 text-xl text-gray-900 font-semibold ">
        {children}
      </div>
    </section>
  );
};

export default Sidebar;
