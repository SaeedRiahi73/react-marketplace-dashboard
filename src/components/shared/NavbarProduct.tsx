import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "@/features/authSlice";
import NavbarProductMobile from "../NavbarProduct/NavbarProductMobile";
import NavbarProductDesktop from "../NavbarProduct/NavbarProductDesktop";


const NavbarProduct: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleAddProduct = () => {
    navigate("/addProduct")
  };

  return (
    <>
      {/* mobile */}
      <NavbarProductMobile handleLogout={handleLogout} onAddProduct={handleAddProduct} />
      {/* desktop */}
      <NavbarProductDesktop onAddProduct={handleAddProduct} />
    </>
  );
};

export default NavbarProduct;
