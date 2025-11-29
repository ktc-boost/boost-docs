import { ROUTE_PATH } from "@/app/routes/routeConstants";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/components/shadcn/sidebar";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SidebarFooterOut = () => {
  const navigate = useNavigate();

  const handleOutClick = () => navigate(ROUTE_PATH.ROOT);
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
          onClick={handleOutClick}
        >
          <div className="bg-transparent text-gray-500 flex aspect-square size-8 items-center justify-center ">
            <LogOut size="20" strokeWidth={1.6} />
          </div>
          <div className="absolute grid flex-1 text-left text-sm leading-tight left-11">
            <span className="truncate subtitle2-regular text-gray-500">
              메인 화면으로
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default SidebarFooterOut;
