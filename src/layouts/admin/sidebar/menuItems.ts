import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { SidebarTypes } from "../../../types/layout";

export const Menus: SidebarTypes[] = [
  {
    name: "Dashboard",
    path: "#",
    icon: MdOutlineDashboard,
    subMenus: [
      {
        name: "Site Configuration",
        path: "/admin/dashboard/siteconfigration",
        icon: RiSettings4Line,
      },
    ],
  },
  {
    name: "User",
    icon: AiOutlineUser,
    path: "#",
    subMenus: [
      {
        name: "Users",
        path: "/admin/users",
        icon: AiOutlineUser,
      },
      {
        name: "Roles",
        path: "admin/user/roles",
        icon: RiSettings4Line,
      },
    ],
  },
  {
    name: "E-commerce",
    icon: TbReportAnalytics,
    path: "#",
    subMenus: [
      {
        name: "Products",
        path: "/admin/ecommerce/products",
        icon: RiSettings4Line,
      },
      {
        name: "Resources",
        path: "/admin/ecommerce/resources",
        icon: RiSettings4Line,
      },
      {
        name: "Coupons",
        path: "/admin/ecommerce/coupons",
        icon: RiSettings4Line,
      },
      {
        name: "Subscriptions",
        path: "/admin/ecommerce/subscriptions",
        icon: RiSettings4Line,
      },
      {
        name: "Orders",
        path: "/admin/ecommerce/orders",
        icon: RiSettings4Line,
      },
    ],
  },
];
