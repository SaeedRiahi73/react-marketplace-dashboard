import { permissionEnum } from "@/enums/permissionEnum";
import { INavigationItem } from "@/interface/INavigation";
import { Package, UserRound, UsersRound } from "lucide-react";

// مسیرهای افزودن و ویرایش زیر مسیر فهرست نیستند؛ keywords آن‌ها را به بخش اصلی وصل می‌کند.
export const navigationItems: INavigationItem[] = [
  {
    id: "products",
    label: "همه محصولات",
    to: "/",
    icon: Package,
    permission: permissionEnum.ViewProducts,
    activeKeywords: ["product"],
    includeRoot: true,
  },
  {
    id: "users",
    label: "مدیریت کاربران",
    to: "/users",
    icon: UsersRound,
    permission: permissionEnum.ViewUsers,
    activeKeywords: ["user"],
    includeRoot: false,
  },
  {
    id: "profile",
    label: "حساب کاربری",
    to: "/profile",
    icon: UserRound,
    permission: permissionEnum.ViewOwnProfile,
    activeKeywords: ["profile"],
    includeRoot: false,
  },
];
