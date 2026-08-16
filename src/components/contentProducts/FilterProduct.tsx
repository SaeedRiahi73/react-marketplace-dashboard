import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { Input, Combobox, ColumnSelector } from "@/components/ui";
import { typeIconEnum } from "@/enums/styleIconEnum";
import { IItemStatuses } from "@/interface/IItemStatuses";
import IconSliders_simple from "@/components/icons/IconSliders-simple";
import Iconcolumns_3 from "@/components/icons/Iconcolumns-3";
import IconSearch from "@/components/icons/IconSearch";
import useProductStatuses from "@/hooks/useProductStatuses";
import {
  getCurrentPage,
  getProductPerPage,
  getSearchQuery,
  getStatus,
  setCurrentProductCount,
  setFilteredProduct,
} from "@/features/filterSlice";
import Spinner from "../shared/Snipper";
import ErrorPage from "@/pages/ErrorPage";
import { useGetProductQuery } from "@/api/productApiSlice";
import { IStatusFilterd } from "@/interface/IFilter";
import { IProduct } from "@/interface/IProduct";
import useFilteredProduct from "@/hooks/useFilteredProduct";
import usePaginatedProducts from "@/hooks/usePaginatedProducts";
import useSearchFilter from "@/hooks/useSearchFilter";

const FilterProduct: React.FC = () => {
  const { data: products = [], error, isLoading } = useGetProductQuery();
  console.log(products);
  
  const dispatch = useDispatch();

  const status: IStatusFilterd = useSelector((state: RootState) =>
    getStatus(state)
  );

  const searchQuery: string = useSelector((state: RootState) =>
    getSearchQuery(state)
  );

  const productPerPage: number = useSelector((state: RootState) =>
    getProductPerPage(state)
  );

  const currentPage: number = useSelector((state: RootState) =>
    getCurrentPage(state)
  );

  const itemStatuses: IItemStatuses[] = useProductStatuses(products);

  const filteredProduct: IProduct[] = useFilteredProduct(
    products,
    status,
    searchQuery,
  );

  const calculatedCurrentProducts = usePaginatedProducts(
    currentPage,
    productPerPage,
    filteredProduct
  );

  const handleSearch = useSearchFilter();

  useEffect(() => {
    dispatch(setFilteredProduct(calculatedCurrentProducts));
    dispatch(setCurrentProductCount(filteredProduct.length));
  }, [filteredProduct, calculatedCurrentProducts]);

  if (isLoading) {
    return <Spinner text="لطفاً صبر کنید..." />;
  }

  if (error) {
    console.error(error);
    return <ErrorPage />;
  }

  return (
    <div className="flex flex-col tablet:flex-row gap-3 items-center tablet:space-x-2 rtl:space-x-reverse justify-between">
      <div className="flex flex-row gap-3 items-center w-full tablet:w-fit">
        <Combobox
          className="flex-1 bg-white border-[1.5px] border-gray-300 text-black px-4 py-2 h-10 w-full tablet:w-auto rounded-md flex items-center gap-2 shadow-sm hover:bg-gray-100 focus:ring focus:ring-blue-300"
          frameworks={itemStatuses}
        >
          {" "}
          <IconSliders_simple
            typeIcon={typeIconEnum.Reqular}
            className="fill-lightGray-900 w-[13.33px] h-[10px]"
          />
          <h6 className="text-H6/Semibold">کل محصولات </h6>
        </Combobox>
        <ColumnSelector className="hidden flex-1 w-full tablet:w-auto bg-lightGray-50 tablet:flex flex-row h-[40px] rounded-lg border gap-2 px-4 items-center">
          <Iconcolumns_3
            typeIcon={typeIconEnum.Reqular}
            className="fill-lightGray-900 w-[16.67px] h-[11.67px]"
          />
          <h6 className="text-H6/Semibold">ستون‌ها </h6>
        </ColumnSelector>
      </div>
      {/* Search Box */}
      <div className="flex m-0 w-full justify-end">
        <Input
          placeholder="جستجو نام محصول"
          className="w-full  laptop:w-[576px] placeholder:text-H6/Regular"
          icon={<IconSearch className="fill-lightGray-700" />}
          classNameContainerInput="w-full laptop:w-[574px] h-[40px]"
          onChange={(event) => handleSearch(event.target.value)}
        />
      </div>
    </div>
  );
};

export default FilterProduct;
