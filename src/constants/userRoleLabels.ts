import { userRoleEnum } from "@/enums/userRoleEnum";

export const userRoleLabels: Record<userRoleEnum, string> = {
  [userRoleEnum.Admin]: "مدیر سیستم",
  [userRoleEnum.Demo]: "نسخه آزمایشی",
  [userRoleEnum.ProductManager]: "مدیر محصول",
};
