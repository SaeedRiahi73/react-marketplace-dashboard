import { apiSlice } from "@/api/apiSlice";
import { useChangeCurrentUserPasswordMutation } from "@/api/userApiSlice";
import { typeToastEnum } from "@/enums/typeToastEnum";
import { logout } from "@/features/authSlice";
import { setToastMessage } from "@/features/toastSlice";
import { IUseChangePasswordReturn } from "@/interface/IUser";
import { ChangePasswordFormValues } from "@/type/types";
import { changePasswordSchema } from "@/validation/changePasswordValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useChangePassword = (): IUseChangePasswordReturn => {
  const [changePassword, { isLoading }] =
    useChangeCurrentUserPasswordMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const methods = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(changePasswordSchema),
    mode: "onChange",
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const onSubmit: SubmitHandler<ChangePasswordFormValues> = async (values) => {
    try {
      await changePassword(values).unwrap();

      dispatch(logout());
      dispatch(apiSlice.util.resetApiState());
      dispatch(
        setToastMessage({
          status: typeToastEnum.success,
          message: "رمز عبور با موفقیت تغییر کرد. لطفاً دوباره وارد شوید.",
        }),
      );
      navigate("/login", { replace: true });
    } catch {
      // پیام خطای API به‌صورت سراسری در apiSlice نمایش داده می‌شود.
    }
  };

  return {
    methods,
    onSubmit,
    isLoading,
  };
};

export default useChangePassword;
