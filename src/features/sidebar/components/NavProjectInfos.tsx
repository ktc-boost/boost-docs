import type { NavProps } from "@/features/sidebar/types/sidebarTypes";
import { SidebarGroupNav } from "@/shared/components/ui/SidebarGroupNav";

const NavProjectInfos = ({ items }: NavProps) => {
  return <SidebarGroupNav title="Project Informations" items={items} />;
};

export default NavProjectInfos;
