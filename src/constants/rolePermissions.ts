import { permissionEnum } from "@/enums/permissionEnum";
import { userRoleEnum } from "@/enums/userRoleEnum";

export const rolePermissions: Record<userRoleEnum, permissionEnum[]> = {
    [userRoleEnum.Admin]: [
        permissionEnum.ViewProducts,
        permissionEnum.CreateProduct,
        permissionEnum.EditProduct,
        permissionEnum.DeleteProduct,
        permissionEnum.ManageUsers,
    ],
    [userRoleEnum.ProductManager]: [
        permissionEnum.ViewProducts,
        permissionEnum.CreateProduct,
        permissionEnum.EditProduct,
    ],
    [userRoleEnum.Demo]: [
        permissionEnum.ViewProducts,
    ],
};
