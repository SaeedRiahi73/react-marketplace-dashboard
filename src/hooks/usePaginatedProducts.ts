import { IProduct } from "@/interface/IProduct";
import { useMemo } from "react";

const usePaginatedProducts = (
    currentPage: number,
    productPerPage: number,
    filteredProduct: IProduct[]
): IProduct[] => {
    return useMemo(() => {
        // const pageCount = Math.ceil(filteredProduct.length / productPerPage);

        const start = (currentPage - 1) * productPerPage;

        const end = start + productPerPage;

        return filteredProduct.slice(start, end);
    }, [currentPage, productPerPage, filteredProduct]);
};


export default usePaginatedProducts