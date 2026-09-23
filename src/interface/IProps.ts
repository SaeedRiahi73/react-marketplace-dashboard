import React, { ReactNode } from "react";
import { IProduct } from "./IProduct";
import { SelectedColumnsState } from "@/type/types";
import { permissionEnum } from "@/enums/permissionEnum";
import {
  ICurrentUserProfile,
  IUserBase,
  IUserDetail,
  IUserListItem,
  IUserProfileFields,
} from "./IUser";

export interface IPropsChildren {
  children: ReactNode
}

export interface IPermissionRouteProps {
  children: React.ReactElement,
  permission: permissionEnum
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

export interface ISpinnerProps {
  text: string;
  overlay?: boolean;
}

export interface INvabarAddAndEditProps {
  title: string,
  subTitle: string
}

export interface IConfirmProps {
  button?: React.ReactElement,
  title: string,
  content: string,
  confirm: () => void,
  open?: boolean,
  onOpenChange?: (open: boolean) => void
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

export interface IDashboardNavbarProps {
  title: string;
  subTitle: string;
  actionLabel?: string;
  onAction?: () => void;
  actionDisabled?: boolean;
  actionDisabledTitle?: string;
  backLabel?: string;
  backPath?: string;
  onBack?: () => void;
}

export interface IDashboardNavbarDesktopProps extends IDashboardNavbarProps {}

export interface IDashboardNavbarMobileProps extends IDashboardNavbarProps {}

export interface ILogoSidbarProps {
  mobile?: boolean;
}

export interface IUserAccountDetailsCardProps {
  user: IUserBase & IUserProfileFields;
  caption: string;
  detailsTitle: string;
  detailsDescription: string;
  actions?: ReactNode;
}

export interface IUsersTableProps {
  users: IUserListItem[];
}

export interface IUsersMobileListProps {
  users: IUserListItem[];
}

export interface IChangePasswordFormProps {
  onCancel: () => void;
}

export interface IUserProfileDetailsProps {
  profile: ICurrentUserProfile;
  onEditProfile?: () => void;
  onChangePassword?: () => void;
}

export interface IUserDetailsCardProps {
  user: IUserDetail;
}
