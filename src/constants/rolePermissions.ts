import { permissionEnum } from "@/enums/permissionEnum";
import { userRoleEnum } from "@/enums/userRoleEnum";

export const rolePermissions: Record<userRoleEnum, permissionEnum[]> = {
    [userRoleEnum.Admin]: [
        permissionEnum.ViewProducts,
        permissionEnum.CreateProduct,
        permissionEnum.EditProduct,
        permissionEnum.DeleteProduct,
        permissionEnum.ViewUsers,
        permissionEnum.ViewOwnProfile,
        permissionEnum.EditOwnProfile,
        permissionEnum.ChangeOwnPassword,
        permissionEnum.ViewUserDetails,
        permissionEnum.CreateUser,
        permissionEnum.ChangeUserStatus,
    ],
    [userRoleEnum.ProductManager]: [
        permissionEnum.ViewProducts,
        permissionEnum.CreateProduct,
        permissionEnum.EditProduct,
        permissionEnum.ViewOwnProfile,
        permissionEnum.EditOwnProfile,
        permissionEnum.ChangeOwnPassword,
    ],
    [userRoleEnum.Demo]: [
        permissionEnum.ViewProducts,
        permissionEnum.ViewUsers,
        permissionEnum.ViewOwnProfile,
    ],
};
