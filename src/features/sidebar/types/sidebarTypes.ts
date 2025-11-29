import type { LucideIcon } from "lucide-react";

export interface SidebarSubItem {
  title: string;
  path: string;
}

export interface SidebarItem {
  title: string;
  path?: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: SidebarSubItem[];
}

export interface NavProps {
  items: SidebarItem[];
}
