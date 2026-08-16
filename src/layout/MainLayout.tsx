import { Navigate, Outlet } from "react-router-dom";
import Sidbar from "../components/contentSidbar/Sidbar";
import useIsLogin from "@/hooks/useIsLogin";

const MainLayout: React.FC = () => {
  const isLogin = useIsLogin();

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="h-screen tablet:overflow-hidden">
      <div className="flex flex-row w-full">
        <div className="hidden tablet:flex tablet:w-1/5 h-screen border">
          <Sidbar />
        </div>
        <div className="flex flex-grow bg-lightGray-50 h-screen">
          {/* <Navbar /> */}
          <main className="flex flex-col w-full">
            <Outlet />
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
