import { Helmet } from "react-helmet";
import ProductTable from "@/components/contentProducts/ProductTable";
import ProductCards from "@/components/contentProducts/ProductCards";
import ProductPagination from "@/components/contentProducts/ProductPagination";
import DashboardNavbar from "@/components/shared/DashboardNavbar";
import FilterProduct from "@/components/contentProducts/FilterProduct";
import useIsMobile from "@/hooks/useIsMobile";
import { useNavigate } from "react-router-dom";

const Products: React.FC = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Dashbord</title>
      </Helmet>
      <DashboardNavbar
        title="محصولات"
        subTitle="مدیریت محصولات سلفیت"
        actionLabel="اضافه کردن محصول"
        onAction={() => navigate("/addProduct")}
      />
      <div className=" flex flex-col">
        <div className="bg-white rounded-xl flex flex-col p-2 m-2 gap-6 tablet:m-8 tablet:gap-6">
          <FilterProduct />
          {/* mobile */}
          {/* desktop */}
          {isMobile ? <ProductCards /> : <ProductTable />}
          <ProductPagination />
        </div>
      </div>
    </>
  );
};

export default Products;
