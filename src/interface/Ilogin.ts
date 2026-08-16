import { FormikProps } from "formik";


export interface IUserlogin {
    usernameOrEmail: string,
    password: string,
    rememberMe: boolean
}

export interface IApiResponseLogin {
    isSuccess: boolean,
    message: string,
    errors: string[],
    data: TokenData
}

interface TokenData {
    token: string,
    refreshToken: string,
    expireRefreshToken: string,
    tokenType: string,
    expireIn: string;
}

export interface IUseLoginFormReturn{
    visibilityPassword:boolean ,
    setVisibilityPassword:React.Dispatch<React.SetStateAction<boolean>>,
    isLoading:boolean,
    formik:FormikProps<IUserlogin>,
    canEnter:boolean,
}