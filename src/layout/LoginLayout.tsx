import React from "react";
import { Outlet } from "react-router-dom";
import NavbarLogin from "@/components/shared/NavbarLogin";

const LoginLayout: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-800  items-center justify-center min-h-screen overflow-hidden">
      <NavbarLogin />
      <Outlet />
    </div>
  );
};

export default LoginLayout;
