import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/components/shadcn/sidebar";

interface SidebarHeaderInfoProps {
  headerItem: {
    name: string;
    logo: string;
    plan: string;
  };
}

const SidebarHeaderInfo = ({ headerItem }: SidebarHeaderInfoProps) => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="bg-boost-yellow text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <img
              src={headerItem.logo}
              alt={headerItem.name}
              className="size-7"
            />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{headerItem.name}</span>
            <span className="truncate text-xs">{headerItem.plan}</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default SidebarHeaderInfo;
