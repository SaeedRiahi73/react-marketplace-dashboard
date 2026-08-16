import { productFilterEnum } from "@/enums/productFilterEnum";
import { statusProductEnum } from "@/enums/statusProductEnum";
import { IStatusFilterd } from "@/interface/IFilter";
import { IProduct } from "@/interface/IProduct";
import { useMemo } from "react";

const useFilteredProduct = (
    products: IProduct[],
    status: IStatusFilterd,
    searchQuery: string,
): IProduct[] => {
    return useMemo(() => {
        return [...products]
            .filter((product: IProduct) => {
                if (
                    status.statusValue === productFilterEnum.Active &&
                    product.status !== statusProductEnum.Active
                ) return false;

                if (
                    status.statusValue === productFilterEnum.DeActive &&
                    product.status !== statusProductEnum.DeActive
                ) return false;

                if (
                    status.statusValue === productFilterEnum.OutOfStock &&
                    product.quantity !== 0
                ) return false;

                if (
                    searchQuery &&
                    !product.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                    return false;

                return true;
            });
    }, [products, status, searchQuery]);
};

export default useFilteredProduct;