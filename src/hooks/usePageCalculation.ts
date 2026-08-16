import { useMemo } from "react";
import { ISelected } from "@/interface/IProps";

export const usePageCalculation = (numberPage: number): ISelected[] => {
    return useMemo(() => {
        if (numberPage === 0) return [{ name: "1", value: 1 }];

        return Array.from({ length: numberPage }, (_, index) => ({
            name: (index + 1).toString(),
            value: index + 1,
        }));
    }, [numberPage]);
};