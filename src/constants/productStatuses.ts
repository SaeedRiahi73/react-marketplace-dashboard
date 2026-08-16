import { productFilterEnum } from "@/enums/productFilterEnum";
import { IItemStatuses } from "@/interface/IItemStatuses";

export const productStatuses: IItemStatuses[] = [
    { value: productFilterEnum.All, label: "کل محصولات (0)" },
    { value: productFilterEnum.Active, label: "فعال (0)" },
    { value: productFilterEnum.DeActive, label: "غیرفعال (0)" },
    { value: productFilterEnum.OutOfStock, label: "ناموجود (0)" },
];
