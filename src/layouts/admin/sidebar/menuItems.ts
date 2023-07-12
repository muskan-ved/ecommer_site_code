import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";

export const Menus = [
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
