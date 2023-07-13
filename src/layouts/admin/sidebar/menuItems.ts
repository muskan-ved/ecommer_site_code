import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { SidebarTypes } from "../../../types/layout";

export const Menus:SidebarTypes[] = [
  {
    name: "Dashboard", 
    path: '',
    icon: MdOutlineDashboard,
    subMenus: [
      {
        name: "Site Configuration",
        path: "/dashboard/services1",
        icon: RiSettings4Line,
      },
    ],
  },
  {
    name: "Users",
    icon: AiOutlineUser,
    path: '',
    subMenus: [
      {
        name: "Users",
        path: "/users",
        icon: AiOutlineUser,
      },
      {
        name: "Roles",
        path: "/roles",
        icon: RiSettings4Line,
      },
    ],
  },
  {
    name: "E-commerce",
    icon: TbReportAnalytics,
    path: '',
    subMenus: [
      {
        name: "Products",
        path: "/products",
        icon: RiSettings4Line,
      },
      {
        name: "Resources",
        path: "/resources",
        icon: RiSettings4Line,
      },
      {
        name: "Coupons",
        path: "/coupons",
        icon: RiSettings4Line,
      },
      {
        name: "Subscriptions",
        path: "/subscriptions",
        icon: RiSettings4Line,
      },
      {
        name: "Orders",
        path: "/orders",
        icon: RiSettings4Line,
      },
    ],
  },
];
