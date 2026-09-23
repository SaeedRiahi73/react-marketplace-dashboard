import { permissionEnum } from "@/enums/permissionEnum";
import { LucideIcon } from "lucide-react";

export interface INavigationItem {
  id: string;
  label: string;
  to: string;
  icon: LucideIcon;
  permission: permissionEnum;
  activeKeywords: readonly string[];
  includeRoot: boolean;
}

export interface IActiveNavigationItem extends INavigationItem {
  isActive: boolean;
}
