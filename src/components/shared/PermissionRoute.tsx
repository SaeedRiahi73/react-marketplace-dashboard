import useHasPermission from "@/hooks/useHasPermission";
import { IPermissionRouteProps } from "@/interface/IProps";
import { Navigate } from "react-router-dom";

const PermissionRoute: React.FC<IPermissionRouteProps> = ({
  children,
  permission,
}) => {
  const hasPermission = useHasPermission(permission);

  if (!hasPermission) {
    return <Navigate to="/forbidden" replace />;
  }

  return children;
};

export default PermissionRoute;
