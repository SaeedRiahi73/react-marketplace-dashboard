import { IProduct } from "@/interface/IProduct";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { getFilteredProduct } from "@/features/filterSlice";
import ProductCard from "./ProductCard";

const ProductCards: React.FC = () => {
  const dataProduct: IProduct[] = useSelector((state: RootState) =>
    getFilteredProduct(state)
  );
  return (
    <>
      {dataProduct.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductCards;
