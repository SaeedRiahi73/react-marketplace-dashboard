import { z } from "zod";

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "رمز عبور فعلی الزامی است."),
    newPassword: z
      .string()
      .min(8, "رمز عبور جدید باید حداقل ۸ کاراکتر باشد.")
      .max(100, "رمز عبور جدید نمی‌تواند بیشتر از ۱۰۰ کاراکتر باشد."),
    confirmNewPassword: z
      .string()
      .min(1, "تکرار رمز عبور جدید الزامی است."),
  })
  .refine((values) => values.newPassword !== values.currentPassword, {
    message: "رمز عبور جدید باید با رمز عبور فعلی متفاوت باشد.",
    path: ["newPassword"],
  })
  .refine(
    (values) => values.newPassword === values.confirmNewPassword,
    {
      message: "رمز عبور جدید و تکرار آن یکسان نیستند.",
      path: ["confirmNewPassword"],
    },
  );
