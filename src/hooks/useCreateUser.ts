import { useCreateUserMutation } from "@/api/userApiSlice";
import { userRoleIdEnum } from "@/enums/userRoleIdEnum";
import { typeToastEnum } from "@/enums/typeToastEnum";
import { setToastMessage } from "@/features/toastSlice";
import { IUseCreateUserReturn } from "@/interface/IUser";
import { CreateUserFormValues } from "@/type/types";
import { createUserSchema } from "@/validation/createUserValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useCreateUser = (): IUseCreateUserReturn => {
  const [createUser, { isLoading }] = useCreateUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const methods = useForm<CreateUserFormValues>({
    resolver: zodResolver(createUserSchema),
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: userRoleIdEnum.ProductManager,
    },
  });

  const onSubmit: SubmitHandler<CreateUserFormValues> = async (values) => {
    try {
      await createUser(values).unwrap();

      dispatch(
        setToastMessage({
          status: typeToastEnum.success,
          message: "کاربر جدید با موفقیت ایجاد شد.",
        }),
      );
      navigate("/users");
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

export default useCreateUser;
