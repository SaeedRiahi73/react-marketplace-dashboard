import { FormikProps } from "formik";


export interface IUserlogin {
    usernameOrEmail: string,
    password: string,
    rememberMe: boolean
}

export interface IUseLoginFormReturn{
    visibilityPassword:boolean ,
    setVisibilityPassword:React.Dispatch<React.SetStateAction<boolean>>,
    isLoading:boolean,
    isDemoLoginLoading:boolean,
    handleDemoLogin:()=>Promise<void>,
    formik:FormikProps<IUserlogin>,
    canEnter:boolean,
}
