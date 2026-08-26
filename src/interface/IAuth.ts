import { userRoleEnum } from "@/enums/userRoleEnum";

export interface IAuthSession {
    token: string,
    userName: string,
    roleId: number,
    role: userRoleEnum,
    expireAt: string
}

export interface IAuthState {
    session: IAuthSession | null,
    logoutOpenDialog: boolean
}
