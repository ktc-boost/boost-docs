import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/shared/components/shadcn/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/shadcn/breadcrumb";
import { Separator } from "@/shared/components/shadcn/separator";
import { Outlet, useLocation } from "react-router-dom";
import AppSidebar from "@/features/sidebar/components/AppSidebar";
import { sidebarItems } from "@/features/sidebar/constants/sidebarConstants";

export const AppLayout = () => {
  const location = useLocation();

  const getBreadcrumb = (path: string) => {
    const allGroups = [
      ...sidebarItems.navProjectInfos,
      ...sidebarItems.navProjectDocs,
    ];

    for (const group of allGroups) {
      const foundItem = group.items.find((item) => item.path === path);
      if (foundItem) {
        return { groupTitle: group.title, itemTitle: foundItem.title };
      }
    }

    const firstGroup = allGroups[0];
    const firstItem = firstGroup.items[0];

    return { groupTitle: firstGroup.title, itemTitle: firstItem.title };
  };

  const { groupTitle, itemTitle } = getBreadcrumb(location.pathname);

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar />

        <SidebarInset className="flex-1 flex flex-col">
          <header className="flex h-16 shrink-0 items-center gap-2 px-4">
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>{groupTitle}</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{itemTitle}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>

          <main className="flex-1 p-6 overflow-auto">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};
