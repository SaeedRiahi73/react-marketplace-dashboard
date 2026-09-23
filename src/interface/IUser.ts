import { userRoleEnum } from "@/enums/userRoleEnum";
import { userRoleIdEnum } from "@/enums/userRoleIdEnum";
import { userSortOrderEnum } from "@/enums/userSortOrderEnum";
import {
    ChangePasswordFormValues,
    CreateUserFormValues,
    UpdateProfileFormValues,
} from "@/type/types";
import { SubmitHandler, UseFormReturn } from "react-hook-form";

export interface IUserListQuery {
    pageNumber: number;
    pageSize: number;
    search?: string;
    role?: userRoleIdEnum;
    isActive?: boolean;
    sortOrder: userSortOrderEnum;
}

export interface IUserBase {
    id: string;
    username: string;
    roleId: userRoleIdEnum;
    role: userRoleEnum;
    isActive: boolean;
    createdAt: string;
    image: string | null;
}

export interface IUserListItem extends IUserBase {
    canChangeStatus: boolean;
}

export interface IUserListData {
    items: IUserListItem[];
    pageNumber: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
}

export interface IUserProfileFields {
    email: string;
    updatedAt: string | null;
}

export interface IUserDetail extends IUserListItem, IUserProfileFields {}

export interface ICurrentUserProfile extends IUserBase, IUserProfileFields {}

export interface ICreateUserRequest {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: userRoleIdEnum.ProductManager | null;
}

export interface IChangeUserStatusArgs {
    id: string;
    isActive: boolean;
}

export interface IUpdateCurrentUserProfileArgs {
    data: FormData;
}

export interface IChangeCurrentUserPasswordRequest {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}

export interface IUseCreateUserReturn {
    methods: UseFormReturn<CreateUserFormValues>;
    onSubmit: SubmitHandler<CreateUserFormValues>;
    isLoading: boolean;
}

export interface IUseChangeUserStatusProps {
    user: IUserListItem;
}

export interface IUseChangeUserStatusReturn {
    canChangeStatus: boolean;
    isLoading: boolean;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleChangeStatus: () => Promise<void>;
}

export interface IUseUpdateProfileProps {
    profile: ICurrentUserProfile;
    onSuccess?: () => void;
}

export interface IUseUpdateProfileReturn {
    methods: UseFormReturn<UpdateProfileFormValues>;
    onSubmit: SubmitHandler<UpdateProfileFormValues>;
    isLoading: boolean;
    previewUrl: string;
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleRemoveImage: () => void;
}

export interface IUseChangePasswordReturn {
    methods: UseFormReturn<ChangePasswordFormValues>;
    onSubmit: SubmitHandler<ChangePasswordFormValues>;
    isLoading: boolean;
}
