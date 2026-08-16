import React, { ReactNode } from "react";
import { IProduct } from "./IProduct";
import { SelectedColumnsState } from "@/type/types";

export interface IPropsChildren {
  children: ReactNode
}

export interface IProductTableAndCardProps {
  dataProduct: IProduct[]
}

export interface ISelected {
  name: string,
  value: number
}

export interface ISelectedProps {
  items: ISelected[]
}

export interface ISpinnerProps { text: string; }

export interface INvabarAddAndEditProps {
  title: string,
  subTitle: string
}

export interface IConfirmProps {
  button: React.ReactElement,
  title: string,
  content: string,
  confirm: () => void
}

export interface IColumnSelectorProps {
  children?: React.ReactNode,
  className?: string
}

export interface IProductCardAndTableProps {
  product: IProduct,
  SelectedColumns?: SelectedColumnsState
}

export interface NumberOfRowsPerPageProps {
  handleRow: (value: string) => void,
  numberRows: ISelected[]
  currentProductCount: number
}

export interface PaginationManagementProps {
  numberPage: ISelected[],
  currentPage: number,
  pageCount: number,
  handlePageClick: (value: string) => void,
  handleNextPage: () => void,
  handlePreviousPage: () => void,
  handleFirstPage: () => void,
  handleLastPage: () => void
}

export interface INavbarProduct{
  handleLogout:()=>void,
  onAddProduct:()=>void
}

export interface INavbarProductMobileProps extends INavbarProduct{}

export interface INavbarProductDesktopProps extends Pick<INavbarProduct,"onAddProduct">{}
