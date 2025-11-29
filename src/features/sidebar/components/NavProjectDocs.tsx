import type { NavProps } from "@/features/sidebar/types/sidebarTypes";
import { SidebarGroupNav } from "@/shared/components/ui/SidebarGroupNav";

const NavProjectDocs = ({ items }: NavProps) => {
  return <SidebarGroupNav title="Project Documents" items={items} />;
};

export default NavProjectDocs;
