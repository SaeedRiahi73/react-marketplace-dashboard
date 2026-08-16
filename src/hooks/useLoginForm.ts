import { useLoginMutation } from "@/api/authApiSlice";
import { IUseLoginFormReturn, IUserlogin } from "@/interface/Ilogin";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { loginSchema } from "@/validation/loginValidation";
import { setToken } from "@/features/authSlice";
import Cookies from "js-cookie";


const useLoginForm = (): IUseLoginFormReturn => {

    const [visibilityPassword, setVisibilityPassword] = useState<boolean>(false);

    const [login, { isLoading }] = useLoginMutation();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            usernameOrEmail: "",
            password: "",
            rememberMe: false,
        },
        validationSchema: loginSchema,
        onSubmit: async (values: IUserlogin, { resetForm }) => {
            try {
                // const myJosn: string = JSON.stringify(values);
                const result = await login(values).unwrap();

                if (result.isSuccess) {
                    if (values.rememberMe) {
                        Cookies.set("token", result.data.token, {
                            expires: 5, // expires in 5 day
                            path: "/", // available throughout the entire site
                        });
                    }
                    sessionStorage.setItem("token", result.data.token);
                    dispatch(setToken(result.data.token));

                    navigate("/");
                } else {
                    const errorMsg: string = result.errors?.[0] || result.message || "اطلاعات ورود نادرست است.";
                    toast.error(errorMsg, { position: "top-left" })
                }
            } catch (error: any) {
                console.error("Failed to login:", error);
                const serverError: string = error?.data?.errors?.[0] || "ارتباط با سرور برقرار نشد.";
                toast.error(serverError, {
                    position: "top-left",
                });
                resetForm();
            }
        },
    });

    const canEnter = formik.isValid && formik.dirty;

    return {
        canEnter,
        formik,
        isLoading,
        setVisibilityPassword,
        visibilityPassword
    }

}

export default useLoginForm;