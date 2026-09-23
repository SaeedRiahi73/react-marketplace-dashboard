import { userRoleIdEnum } from "@/enums/userRoleIdEnum";
import { z } from "zod";

export const createUserSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد.")
      .max(50, "نام کاربری نمی‌تواند بیشتر از ۵۰ کاراکتر باشد.")
      .regex(
        /^[a-zA-Z0-9._ -]+$/,
        "نام کاربری فقط می‌تواند شامل حروف انگلیسی، عدد، فاصله، نقطه، زیرخط و خط تیره باشد.",
      ),
    email: z
      .string()
      .trim()
      .min(1, "ایمیل الزامی است.")
      .max(50, "ایمیل نمی‌تواند بیشتر از ۵۰ کاراکتر باشد.")
      .email("فرمت ایمیل معتبر نیست."),
    password: z
      .string()
      .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد.")
      .max(100, "رمز عبور نمی‌تواند بیشتر از ۱۰۰ کاراکتر باشد."),
    confirmPassword: z
      .string()
      .min(1, "تکرار رمز عبور الزامی است."),
    role: z.literal(userRoleIdEnum.ProductManager),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "رمز عبور و تکرار آن یکسان نیستند.",
    path: ["confirmPassword"],
  });
