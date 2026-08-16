import { useMemo } from "react";
import { productStatuses } from "@/constants/productStatuses";
import { productFilterEnum } from "@/enums/productFilterEnum";
import { statusProductEnum } from "@/enums/statusProductEnum";
import { IItemStatuses } from "@/interface/IItemStatuses";
import { IProduct } from "@/interface/IProduct";

const useProductStatuses = (products: IProduct[] | null): IItemStatuses[] => {
    return useMemo(() => {
        if (!products || products.length === 0) {
            return productStatuses;
        }
        const { activeProduct, deActiveProduct, outOfStockProduct } = products.reduce(
            (
                result: {
                    activeProduct: number;
                    deActiveProduct: number;
                    outOfStockProduct: number;
                },
                item: IProduct
            ) => {
                if (item.status === statusProductEnum.Active) result.activeProduct++;
                else if (item.status === statusProductEnum.DeActive) result.deActiveProduct++;

                if (item.quantity === 0) result.outOfStockProduct++;
                return result;
            },
            { activeProduct: 0, deActiveProduct: 0, outOfStockProduct: 0 }
        );

        const newProductStatuses: IItemStatuses[] = productStatuses.map((item) => {
            switch (item.value) {
                case productFilterEnum.All:
                    return { ...item, label: `کل محصولات (${products.length})` };
                case productFilterEnum.Active:
                    return { ...item, label: `فعال (${activeProduct})` };
                case productFilterEnum.DeActive:
                    return { ...item, label: `غیرفعال (${deActiveProduct})` };
                case productFilterEnum.OutOfStock:
                    return { ...item, label: `ناموجود (${outOfStockProduct})` };
                default:
                    return item;
            }
        });

        return newProductStatuses;
    }, [products]);
};

export default useProductStatuses;
