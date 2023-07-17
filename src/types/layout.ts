import { IconType } from "react-icons"

type SubMenus = {
    name: String, 
    path: String,
    icon: String
}

export type SidebarTypes = {
    name: String, 
    path: String,
    icon: IconType,
    subMenus: {} | Array<SubMenus>
}
