import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/shared/components/shadcn/sidebar";
import { sidebarItems } from "@/features/sidebar/constants/sidebarConstants";
import SidebarHeaderInfo from "@/features/sidebar/components/SidebarHeaderInfo";
import SidebarFooterOut from "@/features/sidebar/components/SiderbarFooterOut";
import NavProjectInfos from "@/features/sidebar/components/NavProjectInfos";
import NavProjectDocs from "@/features/sidebar/components/NavProjectDocs";

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarHeaderInfo headerItem={sidebarItems.header} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjectInfos items={sidebarItems.navProjectInfos} />
        <NavProjectDocs items={sidebarItems.navProjectDocs} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarFooterOut />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
