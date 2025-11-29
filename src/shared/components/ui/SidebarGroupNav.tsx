import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/components/shadcn/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/shared/components/shadcn/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/shadcn/dropdown-menu";
import type { SidebarItem } from "@/features/sidebar/types/sidebarTypes";
import { ChevronRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/shared/lib/utils";

interface NavProps {
  title: string;
  items: SidebarItem[];
}

export function SidebarGroupNav({ title, items }: NavProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const hasActiveSubItem = item.items?.some(
            (sub) => sub.path === location.pathname
          );

          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive || hasActiveSubItem}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <div className="relative ">
                  {!isMobile && (
                    <div className="in-data-[state=expanded]:hidden">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <SidebarMenuButton tooltip={item.title}>
                            {item.icon && <item.icon />}
                          </SidebarMenuButton>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                          side="right"
                          align="start"
                          className="w-48"
                          sideOffset={10}
                        >
                          <DropdownMenuLabel className="label2-regular text-gray-600">
                            {item.title}
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          {item.items?.map((subItem) => (
                            <DropdownMenuItem key={subItem.title} asChild>
                              <SidebarMenuSubButton
                                className={cn(
                                  "w-full text-left px-2 py-1",
                                  location.pathname === subItem.path
                                    ? "bg-gray-300"
                                    : ""
                                )}
                                onClick={() => navigate(subItem.path)}
                              >
                                {subItem.title}
                              </SidebarMenuSubButton>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  )}
                  <div className="in-data-[state=collapsed]:hidden">
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="cursor-pointer">
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              asChild
                              className={cn(
                                "w-full text-left px-2 py-1",
                                location.pathname === subItem.path
                                  ? "bg-gray-300"
                                  : ""
                              )}
                              onClick={() => navigate(subItem.path)}
                            >
                              <span>{subItem.title}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </div>
                </div>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
