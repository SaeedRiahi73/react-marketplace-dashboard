import { userRoleEnum } from "@/enums/userRoleEnum";
import { IResultInfo } from "@/interface/IResultInfo";

export interface IAuthSession {
    token: string,
    userName: string,
    roleId: number,
    role: userRoleEnum,
    expireAt: string
}

export interface IAuthResponse extends IResultInfo<IAuthSession> {}

export interface IAuthState {
    session: IAuthSession | null,
    isAuthInitialized: boolean,
    logoutOpenDialog: boolean
}
