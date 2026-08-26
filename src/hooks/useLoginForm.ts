import { useDemoLoginMutation, useLoginMutation } from "@/api/authApiSlice";
import { IUseLoginFormReturn, IUserlogin } from "@/interface/Ilogin";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "@/validation/loginValidation";
import { setSession } from "@/features/authSlice";
import { saveAuthSession } from "@/utility/authSessionStorage";


const useLoginForm = (): IUseLoginFormReturn => {

    const [visibilityPassword, setVisibilityPassword] = useState<boolean>(false);

    const [login, { isLoading }] = useLoginMutation();
    const [demoLogin, { isLoading: isDemoLoginLoading }] = useDemoLoginMutation();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            usernameOrEmail: "",
            password: "",
            rememberMe: false,
        },
        validationSchema: loginSchema,
        onSubmit: async (values: IUserlogin, { setFieldValue }) => {
            try {
                // const myJosn: string = JSON.stringify(values);
                const result = await login(values).unwrap();

                if (result.isSuccess) {
                    saveAuthSession(result.data, values.rememberMe);
                    dispatch(setSession(result.data));

                    navigate("/");
                } else {
                    if (result.status === 400 || result.status === 401) {
                        await setFieldValue("password", "");
                    }
                }
            } catch (error: unknown) {
                const errorStatus = typeof error === "object" && error !== null && "status" in error
                    ? (error as { status: unknown }).status
                    : null;

                if (errorStatus === 400 || errorStatus === 401) {
                    await setFieldValue("password", "");
                }
            }
        },
    });

    const canEnter = formik.isValid && formik.dirty;

    const handleDemoLogin = async (): Promise<void> => {
        try {
            const result = await demoLogin().unwrap();

            if (result.isSuccess) {
                saveAuthSession(result.data, false);
                dispatch(setSession(result.data));
                navigate("/");
                return;
            }

        } catch {
            // پیام خطای API به‌صورت سراسری در apiSlice نمایش داده می‌شود.
        }
    };

    return {
        canEnter,
        formik,
        handleDemoLogin,
        isDemoLoginLoading,
        isLoading,
        setVisibilityPassword,
        visibilityPassword
    }

}

export default useLoginForm;
