import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line ,RiUserSettingsLine, RiCouponLine,RiPlayList2Fill,RiListOrdered} from "react-icons/ri";
import { VscGlobe } from "react-icons/vsc";
import { AiOutlineUser,AiOutlineDropbox,AiFillSetting } from "react-icons/ai";
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
        icon: RiUserSettingsLine,
      },
    ],
  },
  {
    name: "E-commerce",
    icon: VscGlobe,
    path: "#",
    subMenus: [
      {
        name: "Products",
        path: "/admin/ecommerce/products",
        icon: AiOutlineDropbox,
      },
      {
        name: "Coupons",
        path: "/admin/ecommerce/coupons",
        icon: RiCouponLine,
      },
      {
        name: "Subscriptions",
        path: "/admin/ecommerce/subscriptions",
        icon: RiPlayList2Fill,
      },
      {
        name: "Resources",
        path: "/admin/ecommerce/resources",
        icon: RiSettings4Line,
      },
      {
        name: "Orders",
        path: "/admin/ecommerce/orders",
        icon: RiListOrdered,
      },
    ],
  },
];
