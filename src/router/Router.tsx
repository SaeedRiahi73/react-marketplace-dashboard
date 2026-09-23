import { createBrowserRouter, RouteObject } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "@/pages/ErrorPage";
import AddProduct from "@/pages/AddProduct";
import Products from "@/pages/Products";
import EditProduct from "@/pages/EditProduct";
import Forbidden from "@/pages/Forbidden";
import Users from "@/pages/Users";
import AddUser from "@/pages/AddUser";
import UserProfile from "@/pages/UserProfile";
import UserDetails from "@/pages/UserDetails";
import PermissionRoute from "@/components/shared/PermissionRoute";
import { permissionEnum } from "@/enums/permissionEnum";

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginLayout />,
    children: [{ path: "/login", element: <Login /> }],
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Products /> },
      { path: "/addProduct", element: <AddProduct /> },
      { path: "/editProduct/:productId", element: <EditProduct /> },
      { path: "/forbidden", element: <Forbidden /> },
      {
        path: "/users",
        element: (
          <PermissionRoute permission={permissionEnum.ViewUsers}>
            <Users />
          </PermissionRoute>
        ),
      },
      {
        path: "/users/:userId",
        element: (
          <PermissionRoute permission={permissionEnum.ViewUserDetails}>
            <UserDetails />
          </PermissionRoute>
        ),
      },
      {
        path: "/addUser",
        element: (
          <PermissionRoute permission={permissionEnum.CreateUser}>
            <AddUser />
          </PermissionRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PermissionRoute permission={permissionEnum.ViewOwnProfile}>
            <UserProfile />
          </PermissionRoute>
        ),
      },
    ],
  },
];

export const Router = createBrowserRouter(routes);
