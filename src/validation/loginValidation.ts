import * as yup from "yup";

export const loginSchema = yup.object({
    usernameOrEmail: yup.string().required("نام کاریری با ایمیل خود را وارد کنید."),
    password: yup.string().required("کلمه عبور خود را وارد کنید.")
})

