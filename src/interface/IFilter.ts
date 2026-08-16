import { productFilterEnum } from "@/enums/productFilterEnum";
import { IProduct } from "./IProduct";
import { SelectedColumnsState } from "@/type/types";

export interface IFilterState {
  status: IStatusFilterd,
  searchQuery: string,
  filteredProduct: IProduct[],
  productPerPage: number,
  currentPage: number,
  currentProductCount: number,
  selectedColumns: SelectedColumnsState
}

export interface ISelectedColumns {
  productInfo: boolean,
  amount: boolean,
  stock: boolean,
  status: boolean,
  actions: boolean,
}

export interface IStatusFilterd {
  statusValue: productFilterEnum,
}

