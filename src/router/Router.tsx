import { createBrowserRouter, RouteObject } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "@/pages/ErrorPage";
import AddProduct from "@/pages/AddProduct";
import Products from "@/pages/Products";
import EditProduct from "@/pages/EditProduct";

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
    ],
  },
];

export const Router = createBrowserRouter(routes);
