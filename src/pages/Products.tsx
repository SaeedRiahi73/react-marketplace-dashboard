import { Helmet } from "react-helmet";
import ProductTable from "@/components/contentProducts/ProductTable";
import ProductCards from "@/components/contentProducts/ProductCards";
import Pagination from "@/components/contentProducts/Pagination";
import NavbarProduct from "@/components/shared/NavbarProduct";
import FilterProduct from "@/components/contentProducts/FilterProduct";
import useIsMobile from "@/hooks/useIsMobile";

const Products: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <Helmet>
        <title>Dashbord</title>
      </Helmet>
      <NavbarProduct />
      <div className=" flex flex-col">
        <div className="flex flex-col gap-2 m-3 tablet:hidden">
          <h3 className="text-H3/Bold">محصولات</h3>
          <h5 className="text-H5/Regular text-lightGray-600">
            مدیریت محصولات سلفیت
          </h5>
        </div>
        <div className="bg-white rounded-xl flex flex-col p-2 m-2 gap-6 tablet:m-8 tablet:gap-6">
          <FilterProduct />
          {/* mobile */}
          {/* desktop */}
          {isMobile ? <ProductCards /> : <ProductTable />}
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Products;
