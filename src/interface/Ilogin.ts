import { FormikProps } from "formik";
import { IAuthSession } from "@/interface/IAuth";
import { IResultInfo } from "@/interface/IResultInfo";


export interface IUserlogin {
    usernameOrEmail: string,
    password: string,
    rememberMe: boolean
}

export interface IApiResponseLogin extends IResultInfo<IAuthSession> {}

export interface IUseLoginFormReturn{
    visibilityPassword:boolean ,
    setVisibilityPassword:React.Dispatch<React.SetStateAction<boolean>>,
    isLoading:boolean,
    isDemoLoginLoading:boolean,
    handleDemoLogin:()=>Promise<void>,
    formik:FormikProps<IUserlogin>,
    canEnter:boolean,
}
