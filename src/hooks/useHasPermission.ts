import { rolePermissions } from "@/constants/rolePermissions";
import { permissionEnum } from "@/enums/permissionEnum";
import { selectCurrentUserRole } from "@/features/authSlice";
import { useSelector } from "react-redux";

const useHasPermission = (permission: permissionEnum): boolean => {
    const currentUserRole = useSelector(selectCurrentUserRole);

    if (!currentUserRole) return false;

    return rolePermissions[currentUserRole].includes(permission);
};

export default useHasPermission;
