import { IProduct } from "@/interface/IProduct";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { getFilteredProduct } from "@/features/filterSlice";
import ProductCard from "./ProductCard";

const ProductCards: React.FC = () => {
  const dataProduct: IProduct[] = useSelector((state: RootState) =>
    getFilteredProduct(state)
  );
  console.log(`data: ${dataProduct}`)
  return (
    <>
      {dataProduct.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </>
  );
};

export default ProductCards;
