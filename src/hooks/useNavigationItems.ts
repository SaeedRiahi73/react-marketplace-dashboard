import { navigationItems } from "@/constants/navigationItems";
import { rolePermissions } from "@/constants/rolePermissions";
import { selectCurrentUserRole } from "@/features/authSlice";
import { IActiveNavigationItem } from "@/interface/INavigation";
import { isPathActive } from "@/utility/isPathActive";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const useNavigationItems = (): IActiveNavigationItem[] => {
  const { pathname } = useLocation();
  const currentUserRole = useSelector(selectCurrentUserRole);

  if (!currentUserRole) return [];

  return navigationItems
    .filter((item) =>
      rolePermissions[currentUserRole].includes(item.permission),
    )
    .map((item) => ({
      ...item,
      isActive: isPathActive(
        pathname,
        item.activeKeywords,
        item.includeRoot,
      ),
    }));
};

export default useNavigationItems;
