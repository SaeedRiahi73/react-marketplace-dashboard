import DashboardNavbarDesktop from "@/components/DashboardNavbar/DashboardNavbarDesktop";
import DashboardNavbarMobile from "@/components/DashboardNavbar/DashboardNavbarMobile";
import useIsMobile from "@/hooks/useIsMobile";
import { IDashboardNavbarProps } from "@/interface/IProps";

const DashboardNavbar: React.FC<IDashboardNavbarProps> = (props) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <DashboardNavbarMobile {...props} />
  ) : (
    <DashboardNavbarDesktop {...props} />
  );
};

export default DashboardNavbar;
